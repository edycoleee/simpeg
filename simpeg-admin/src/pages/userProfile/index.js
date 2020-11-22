import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import MenuAppbar from "../../components/MenuAppbar";
import ScrollButton from "../../components/ScrollButton";
import { AuthContext } from "../../context/AuthContext";
import AlertSnackbar from "../../components/AlertSnackbar";
import app, { LocalServer, Develop } from "../../util/firebase";


const db = app.firestore();
//setting jika menggunakan emulator firestore
if (LocalServer) {
  db.settings({ host: "localhost:8080", ssl: false });
}

function IndexUser() {
  const {
    users,
    currentUser,
    updatePassword,
    updateEmail,
    setUsers,
  } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [ProfilUser, setProfilUser] = useState([]);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [loading, setLoading] = useState(false);

  //state Snackbar
  const [errMessage, setErrMessage] = useState("");
  const [openErr, setOpenErr] = useState(false);

  const getProfile = useCallback(async () => {
    if (Develop) {
      console.log("STEP : EFFECT CB PROFIL");
    }
    db.collection("CL_USER")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (!doc.exists) return;
        setProfilUser(doc.data());
      });
  }, [currentUser.uid]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);


  const onEdit = () => {
    setEditing(true);
  };

  let pilihTPA = [];
  pilihTPA = pilihTPA.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const onSimpan = async () => {
    if (Develop) {
      console.log("STEP : SIMPAN DATA PROFILE", ProfilUser);
    }
    await db
      .collection("CL_USER")
      .doc(currentUser.uid)
      .update({
        ...ProfilUser,
      })
      .then(() => {
        setEditing(false);
        setErrMessage({
          code: "SUCCESS",
          message: "Data Sudah Tersimpan",
        });
        setOpenErr(true);
      })
      .catch((error) => console.error("Error Updated :", error));
    await db
      .collection("CL_USER")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (!doc.exists) return;
        setUsers(doc.data());
        if (Develop) {
          console.log("STEP : EFFECT GET USER AUTH", doc.data());
        }
      });
    //console.log(ProfilUser);
  };

  const onBatal = () => {
    setEditing(false);
    getProfile();
  };

  const onChangeProfile = (e) => {
    const { name, value } = e.target;
    setProfilUser({ ...ProfilUser, [name]: value });
  };

  const handleCloseErr = () => {
    setOpenErr(false);
  };


  const onSimpanEmail = () => {
    if (Develop) {
      console.log("STEP : EMAIL PASSWORD CHANGE", passwordRef.current.value);
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setErrMessage({
        code: "ERROR",
        message: "Passwords do not match",
      });
      setOpenErr(true);
    }

    const promises = [];
    setLoading(true);

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setErrMessage({
          code: "SUCCESS",
          message: "EMAIL CHANGE",
        });
        setOpenErr(true);
      })
      .catch(() => {
        setErrMessage({
          code: "ERROR",
          message: "Failed to update account",
        });
        setOpenErr(true);
      })
      .finally(() => {
        setLoading(false);
        setEditingEmail(false);
      });
  };


  return (
    <div>
      <MenuAppbar />
      <ScrollButton />
      <Container maxWidth="sm">
        <Box mt={2} />
        <Typography component="h1" variant="h4" align="center">
          Profile Pengguna
        </Typography>
        <Typography variant="h6" align="center">
          {users.c_username}
        </Typography>
        <Box mt={4} />
        {/* --------------------DISPLAY----------------------------------- */}
        <Paper elevation={2}>
          <Box mt={1} ml={1} mr={1}>
            <Typography variant="h6" gutterBottom>
              Data Pengguna
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  User Name :{ProfilUser.c_username}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="c_username"
                  name="c_username"
                  label="User Name"
                  fullWidth
                  autoComplete="user_name"
                  disabled={!editing}
                  onChange={onChangeProfile}
                  value={ProfilUser.c_username || ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Nama Bidang :{ProfilUser.c_bidang}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="c_bidang"
                  name="c_bidang"
                  label="Nama Bidang"
                  fullWidth
                  autoComplete="user_bidang"
                  disabled={!editing}
                  onChange={onChangeProfile}
                  value={ProfilUser.c_bidang || ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Tugas :{ProfilUser.c_bagian}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="c_bagian"
                  name="c_bagian"
                  label="Tugas"
                  fullWidth
                  autoComplete="c_bagian"
                  disabled={!editing}
                  onChange={onChangeProfile}
                  value={ProfilUser.c_bagian || ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  No Telp :{ProfilUser.c_nohp}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="c_nohp"
                  name="c_nohp"
                  label="No HP"
                  fullWidth
                  autoComplete="c_nohp"
                  disabled={!editing}
                  onChange={onChangeProfile}
                  value={ProfilUser.c_nohp || ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Email Pengguna :{ProfilUser.c_email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="c_email"
                  name="c_email"
                  label="Alamat Email"
                  fullWidth
                  autoComplete="c_email"
                  disabled={!editing}
                  onChange={onChangeProfile}
                  value={ProfilUser.c_email || ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Default OPD :{ProfilUser.c_opd}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Lokasi OPD : {"  "}</label>
                <select
                  id="c_defTPA"
                  onChange={(e) =>
                    setProfilUser({
                      ...ProfilUser,
                      c_defTPA: e.currentTarget.value,
                    })
                  }
                  value={ProfilUser.c_defTPA || ""}
                  disabled={!editing}
                >
                  {pilihTPA}
                </select>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Box mt={4} />
        {/* --------------------EDIT SIMPAN BATAL ACTION-------------------------- */}
        <Paper elevation={2}>
          <Box pt={2} pb={2} ml={2} mr={2}>
            <Button
              onClick={onEdit}
              variant="contained"
              color="primary"
              disabled={editing}
            >
              EDIT DATA
            </Button>{" "}
            <Button
              onClick={onSimpan}
              variant="contained"
              color="primary"
              disabled={!editing}
            >
              SIMPAN
            </Button>{" "}
            <Button
              onClick={onBatal}
              variant="contained"
              color="primary"
              disabled={!editing}
            >
              BATAL
            </Button>
          </Box>
        </Paper>
        <Box mt={4} />
        {/* --------------------USER UPDATE----------------------------------- */}
        <Paper elevation={2}>
          <Box mt={1} ml={1} mr={1}>
            <Typography variant="h6" gutterBottom>
              UPDATE EMAIL PASSWORD
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  EMAIL :{currentUser.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  type="email"
                  ref={emailRef}
                  name="passwordRef"
                  disabled={!editingEmail}
                  defaultValue={currentUser.email || ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  type="password"
                  ref={passwordRef}
                  name="passwordRef"
                  disabled={!editingEmail}
                  placeholder={"Leave blank to keep the same"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  type="password"
                  ref={passwordConfirmRef}
                  name="passwordConfirmRef"
                  disabled={!editingEmail}
                  placeholder={"Leave blank to keep the same"}
                />
              </Grid>
            </Grid>
          </Box>
          <Box pt={2} pb={2} ml={2} mr={2}>
            <Button
              onClick={() => setEditingEmail(true)}
              variant="contained"
              color="primary"
              disabled={editingEmail}
            >
              EDIT EMAIL
            </Button>{" "}
            <Button
              onClick={onSimpanEmail}
              variant="contained"
              color="primary"
              disabled={!editingEmail && !loading}
            >
              SIMPAN
            </Button>{" "}
            <Button
              onClick={() => setEditingEmail(false)}
              variant="contained"
              color="primary"
              disabled={!editingEmail && !loading}
            >
              BATAL
            </Button>
          </Box>
        </Paper>
      </Container>

      <AlertSnackbar
        open={openErr}
        handleClose={handleCloseErr}
        errMessage={errMessage}
      />
    </div>
  );
}

export default IndexUser;
