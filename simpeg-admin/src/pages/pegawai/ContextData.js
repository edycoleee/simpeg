import React, { createContext, useCallback, useState } from "react";
import app, { Firebase, LocalServer, Develop } from "../../util/firebase";
import moment from "moment";

const db = app.firestore();
//setting jika menggunakan emulator firestore
if (LocalServer) {
  db.settings({ host: "localhost:8080", ssl: false });
}

export const DataContext = createContext();

function DataProvider({ children }) {
  //Init Today----------------------------
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  let today = year + "-" + month + "-" + day;
  const [c_tanggal, setTanggal] = useState(today);

  const [semuaData, setSemuaData] = useState([]);

  const SaveData = async (newData) => {
    if (Develop) {
      console.log("STEP : SAVE PEGAWAI", newData);
    }
    let tglserver1 = new Date(
      Firebase.firestore.Timestamp.now().seconds * 1000
    );
    let tglserver = moment(tglserver1).format("YYYY-MM-DD");

    return await db.collection("CL_PEGAWAI").add({
      createdAt: tglserver,
      ...newData,
    });
  };

  const GetAllData = useCallback(async () => {
    await db
      .collection("CL_PEGAWAI")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("Render List Effect :", data);
        setSemuaData(data);
      })
      .catch((error) => console.error("Error Get Data :", error));
  }, []);

  const DeleteData = async (id) => {
    if (Develop) {
      console.log("STEP : DELETE DATA", id);
    }
    await db
      .collection("CL_PEGAWAI")
      .doc(id)
      .delete()
      .then(() => GetAllData());
  };

  const SaveEditData = async (newData) => {
    if (Develop) {
      console.log("STEP : SAVE EDIT DATA", newData);
    }
    const {
      id,
      c_alamat,
      c_nik,
      c_noHP,
      c_keterangan,
      c_nama,
    } = newData;

    await db
      .collection("CL_PEGAWAI")
      .doc(id)
      .update({
        c_alamat,
        c_nik,
        c_noHP,
        c_keterangan,
        c_nama,
      })
      .then(() => GetAllData())
      .catch((error) => console.error("Error Save Data :", error));
  };

  const DataState = {
    semuaData,
    c_tanggal,
    setTanggal,
    SaveData,
    GetAllData,
    DeleteData,
    SaveEditData,
  };
  return (
    <DataContext.Provider value={DataState}>{children}</DataContext.Provider>
  );
}

export default DataProvider;
