import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeWorkTwoToneIcon from "@material-ui/icons/HomeWorkTwoTone";
import AssessmentTwoToneIcon from "@material-ui/icons/AssessmentTwoTone";
import AssignmentTurnedInTwoToneIcon from "@material-ui/icons/AssignmentTurnedInTwoTone";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/user">
      <ListItem button>
        <ListItemIcon>
          <HomeWorkTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Profile Pengguna" />
      </ListItem>
    </Link>
    <Link to="/pegawai">
      <ListItem button>
        <ListItemIcon>
          <AssessmentTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Pegawai" className="rntcblue rnthl" />
      </ListItem>
    </Link>
    <Link to="/file">
      <ListItem button>
        <ListItemIcon>
          <AssessmentTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="File Pegawai" />
      </ListItem>
    </Link>
    <Link to="/belajar">
      <ListItem button>
        <ListItemIcon>
          <AssessmentTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="Ijin Belajar" className="rntcred rnthl" />
      </ListItem>
    </Link>
    <Link to="/berkala">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Naik Berkala" className="rntcyellow rnthl" />
      </ListItem>
    </Link>
    <Link to="/jabatan">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Naik Jabatan" />
      </ListItem>
    </Link>
    <Link to="/pensiun">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Data Pensiun" />
      </ListItem>
    </Link>
    <Link to="/pangkat">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Data Pangkat" />
      </ListItem>
    </Link>
    <Link to="/opd">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Data OPD" />
      </ListItem>
    </Link>
    <Link to="/datauser">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Data User" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Laporan Kehadiran</ListSubheader>
    <Link to="/lapharian">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="ABSENSI HARIAN" />
      </ListItem>
    </Link>
    <Link to="/lapbulan">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="ABSENSI BULANAN" />
      </ListItem>
    </Link>
  </div>
);
