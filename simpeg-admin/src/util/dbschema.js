export const CL_BULAN = [
  {
    nama: "Januari",
    kode: "01",
  },
  {
    nama: "Februari",
    kode: "02",
  },
  {
    nama: "Maret",
    kode: "03",
  },
  {
    nama: "April",
    kode: "04",
  },
  {
    nama: "Mei",
    kode: "05",
  },
  {
    nama: "Juni",
    kode: "06",
  },
  {ra
    nama: "Juli",
    kode: "07",
  },
  {
    nama: "Agustus",
    kode: "08",
  },
  {
    nama: "September",
    kode: "09",
  },
  {
    nama: "Oktober",
    kode: "10",
  },
  {
    nama: "November",
    kode: "11",
  },
  {
    nama: "Desember",
    kode: "12",
  },
];

export const CL_PEGAWAI = [
  {
    c_nip: "",
    c_nama: "",
    c_opd: "",
    c_nokarpeg: "",
    c_nokaris: "",
    c_nokpe: "",
    c_nik: "",
    c_jkel: "",
    c_agama: "",
    c_nikah: "",
    c_alamat: "",
    c_notelp: "",
    c_tmtkgb: "",
    c_nmfoto: "",
    c_linkfoto: "",
    n_gaji:"",
    c_tmtawalkont:"",
    c_tmtakhirkon:"",
    c_jabatan:"",
    c_pendidikan:"",
    c_bidang:"",
    c_posisi:"",
    n_cuti:"",
    a_cuti:[{
      c_id:"",
      c_tglawal:"",
      c_tglakhir:"",
      n_jumlah:"",
      c_keterangan:""
    }],
    a_jabatan: [
      {
        c_id: "",
        c_jabatan: "",
        c_unit: "",
        c_tmt: "",
        eselon: "",
        c_akhir:""
      },
    ],
    a_pendidikan: [
      {
        c_id: "",
        c_tingkat: "",
        c_jurusan: "",
        c_lembaga: "",
        c_thnlulus: "",
        c_akhir:""
      },
    ],
    a_diklat: [
      {
        c_id: "",
        c_diklat: "",
        c_penyelenggara: "",
        c_jmljam: "",
        c_tmt: "",
        c_akhir:"",
      },
    ],
    a_penghargaan: [
      {
        c_id: "",
        c_tandajasa: "",
        c_pemberi: "",
        c_tahun: "",
        c_akhir:"",
      },
    ],
    a_riwayat: [
      {
        c_id: "",
        c_nama: "",
        c_tgllahir: "",
        c_kablahir: "",
        c_profesi: "",
        c_tglnikah: "",
      },
    ],
    a_anak: [
      {
        c_id: "",
        c_nama: "",
        c_tgllahir: "",
        c_kablahir: "",
        c_status: "",
        c_jnskel: "",
      },
    ],
    a_golongan: [
      {
        c_id: "",
        c_tmt: "",
        c_jeniskp: "",
        c_akhir:"",
      },
    ],
    a_hukuman: [
      {
        c_id: "",
        c_jenis: "",
        c_tmt: "",
        c_nosk: "",
        c_pejabat: "",
        c_ket: "",
      },
    ],
    a_arsip: [
      {
        c_id: "",
        c_nmfile: "",
        c_linkfile: "",
        c_jenis: "",
        c_tahun: "",
        c_ket: "",
      },
    ],
  },
];

export const CL_JNSKEL = ["Pria", "Wanita"];
export const CL_AGAMA = ["Islam", "Kristen", "Katolik", "Hindu", "Budha"];
export const CL_NIKAH = ["Menikah", "Belum Menikah", "Janda/Duda"];
export const CL_GOLONGAN = ["I/a", "I/d", "III/a", "III/d", "IV/a", " IV/e"];
export const CL_PENDIDIKAN = [
  "SD",
  "SMP",
  "SMA",
  "D-1",
  "D-2",
  "D-3",
  "D-4",
  "S1",
  "S2",
  "S3",
];
export const CL_DIKLATPIM = [
  "Non",
  "Sepada",
  "Tk IV",
  "Tk III",
  "Tk II",
  "Tk I",
];
export const CL_JNSJAB = [
  "Fungsional Khusus",
  "Fungsional Umum",
  "Sekretaris Desa",
  "Struktural",
];
