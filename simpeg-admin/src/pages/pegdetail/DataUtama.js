import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";

function DataUtama() {
  return (
    <div>
      <Paper elevation={2}>
        <Box pt={2} pb={2} ml={2} mr={2}>
          <Grid container spacing={3}>
            <Box mt={2} />
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
                Data Utama Pegawai
              </Typography>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <label>Proses : {"  "}</label>
              <select
                id="proses"
                onChange={(e) =>
                  setItem({
                    ...item,
                    proses: e.currentTarget.value,
                  })
                }
                value={item.proses || ""}
              >
                {pilihProses}
              </select>
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField
                id="c_tgljadwal"
                label={`Tmt Awal : `}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                // onChange={(e) =>
                //   setItem({
                //     ...item,
                //     c_tgljadwal: String(e.currentTarget.value),
                //   })
                //}
                //defaultValue={item.c_tgljadwal || ""}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="c_ketjadwal"
                name="c_ketjadwal"
                label="Ket Awal"
                fullWidth
                autoComplete="c_ketjadwal"
                //onChange={handleOnChange}
                //value={item.c_ketjadwal || ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="c_tgljemput"
                label={`Tmt Akhir : `}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                // onChange={(e) =>
                //   setItem({
                //     ...item,
                //     c_tgljemput: String(e.currentTarget.value),
                //   })
                // }
                //defaultValue={item.c_tgljemput || ""}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="c_ketjemput"
                name="c_ketjemput"
                label="Ket Akhir"
                fullWidth
                autoComplete="c_ketjemput"
                //onChange={handleOnChange}
                //value={item.c_ketjemput || ""}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <input type="file" onChange={onFileChangeImg3} />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">Gambar Profile</Typography>
            </Grid>
            {/* <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
                {item.c_fileImg3 === "" ? (
                  "Belum Ada"
                ) : (
                  <Link
                    href={item.c_fileImg3}
                    onClick={(e) => e.preventDefault}
                  >
                    {item.c_namafile3 ? item.c_namafile3 : ""}
                  </Link>
                )}
              </Typography>
            </Grid> */}
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}

export default DataUtama;
