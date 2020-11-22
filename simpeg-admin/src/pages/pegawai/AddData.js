import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";

import { DataContext } from "./ContextData";
import { Develop } from "../../util/firebase";
import Notification from "../../components/Notification";
import { AuthContext } from "../../context/AuthContext";

function AddData() {
    const { users } = useContext(AuthContext);
  const { SaveData, GetAllData, c_tanggal } = useContext(DataContext);
  //State Notify
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  //State Sampah----------------------------
  const [c_nama, setNama] = useState("");
  const [c_alamat, setAlamat] = useState("");
  const [c_nik, setNik] = useState("");
  const [c_noHP, setNoHP] = useState("");
  const [c_keterangan, setKeterangan] = useState("");
  const [loading, setLoading] = useState(false);

  //State Portal------------------------------
  const [openPortal, setOpenPortal] = useState(false);
  const onOpenDialog = () => {
    setOpenPortal(true);
  };

  const handleClose = () => {
    setOpenPortal(false);
  };
  //Simpan Data------------------------------
  const onSimpan = async () => {
    if (c_alamat === "") {
      return setNotify({
        isOpen: true,
        message: "Alamat Kosong",
        type: "error",
      });
    }
    const newData = {
      c_nama,
      c_alamat,
      c_nik,
      c_noHP,
      c_keterangan,
      c_opd:users.c_opd,
    };
    setNotify({
      isOpen: true,
      message: "Proses Simpan Data",
      type: "info",
    });
    setLoading(true);
    await SaveData(newData).then((doc) => {
      if (Develop) {
        console.log("STEP : Save Data : ", doc.id);
      }
    });
    //.then(() => GetAllData());
    //console.log(id);

    setNotify({
      isOpen: true,
      message: "Data Telah Tersimpan",
      type: "success",
    });
    ClearState();
    setLoading(false);
    await GetAllData();
  };

  //Clear State----------------------------
  const ClearState = () => {
    setNama("");
    setAlamat("");
    setNoHP("");
    setNik("");
    setKeterangan("");
  };

  const onLihat = () => {
    onOpenDialog();
  };

  return (
    <div>
      <Paper elevation={2}>
        <Box pt={2} pb={2} ml={2} mr={2}>
          <Grid container spacing={3}>
            <Box mt={2} />
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="c_nama"
                name="c_nama"
                label="Nama Pegawai"
                fullWidth
                autoComplete="c_nama"
                onChange={(e) => setNama(e.target.value)}
                value={c_nama || ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="c_alamat"
                name="c_alamat"
                label="Alamat"
                fullWidth
                autoComplete="c_alamat"
                onChange={(e) => setAlamat(e.target.value)}
                value={c_alamat || ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="c_nik"
                name="c_nik"
                label="NIK "
                fullWidth
                autoComplete="c_nik"
                onChange={(e) => setNik(e.target.value)}
                value={c_nik || ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="c_noHP"
                name="c_noHP"
                label="No HP"
                fullWidth
                autoComplete="c_noHP"
                onChange={(e) => setNoHP(e.target.value)}
                value={c_noHP || ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={3}
                placeholder="Keterangan"
                id="c_keterangan"
                name="c_keterangan"
                onChange={(e) => setKeterangan(e.target.value)}
                value={c_keterangan || ""}
              />
            </Grid>
            <Box mt={2} />
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onSimpan}
                variant="contained"
                color="secondary"
                disabled={loading}
              >
                SIMPAN DATA
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* -----------------------------SnackBar--------------------- */}
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}

export default AddData;
