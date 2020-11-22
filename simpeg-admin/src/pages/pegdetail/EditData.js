import { Grid, TextareaAutosize, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Controls from "../../components/controls/Controls";

const EditData = React.memo(({ dataForEdit, onSimpanEdit }) => {
  const [item, setItem] = useState(dataForEdit);
  useEffect(() => {
    setItem(dataForEdit);
  }, [dataForEdit]);

  const onSimpan = () => {
    onSimpanEdit(item);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  //const { c_alamat, c_kontak, c_noHP, c_keterangan } = item;

  return (
    <div>
      {/* {JSON.stringify(item)} */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="c_nama"
            name="c_nama"
            label="Nama Bank Sampah"
            fullWidth
            autoComplete="c_nama"
            onChange={handleOnChange}
            value={item.c_nama || ""}
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
            onChange={handleOnChange}
            value={item.c_alamat || ""}
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
            onChange={handleOnChange}
            value={item.c_nik || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="c_noHP"
            name="c_noHP"
            label="Nomor HP"
            fullWidth
            autoComplete="c_noHP"
            onChange={handleOnChange}
            value={item.c_noHP || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Keterangan "
            id="c_keterangan"
            name="c_keterangan"
            onChange={handleOnChange}
            value={item.c_keterangan || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Button onClick={onSimpan} text="SIMPAN" />
        </Grid>
      </Grid>
    </div>
  );
});

export default EditData;
