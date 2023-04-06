import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Stack, Grid, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Avatar, Menu, MenuItem } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'
import menuRoute from '../../router/menuRoute'
interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = () => {
  const [openKeys, setOpenKeys] = useState<any[]>([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const navigate = useNavigate()
  function menuItemCilck (menu: any) {
    if (menu.children?.length > 0) {
      if (openKeys.includes(menu.path)) {
        let arr = openKeys.filter(v => v !== menu.path)
        setOpenKeys(arr)
      } else {

        openKeys.push(menu.path)
        setOpenKeys([...openKeys])
      }
    } else {
      navigate(menu.path)
    }
  }
  function renderMenuItem (list = menuRoute) {
    return list.map((menu: any) => {
      let item = (
        <ListItemButton onClick={() => menuItemCilck(menu)} sx={{ pl: menu.level * 2 }}>
          <ListItemText primary={menu.name} />
          {menu.children?.length > 0 ? openKeys.includes(menu.path) ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItemButton>
      )
      let children
      if (menu.children?.length > 0) {
        children = (
          <Collapse in={openKeys.includes(menu.path)} timeout="auto" unmountOnExit>
            {renderMenuItem(menu.children)}
          </Collapse>
        )
      }
      return (
        <List component="div" disablePadding key={menu.path}>
          {item}
          {children}
        </List>
      )
    })
  }
  function userMenuClick (e: any) {
    if (anchorEl) return
    setAnchorEl(e.currentTarget)
    setOpenUserMenu(true)
  }
  function userMenuColease (e: any) {
    setAnchorEl(null)
    setOpenUserMenu(false)
  }
  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid item style={{ maxWidth: 360, overflowY: 'auto', height: '100%', }}>
        <List
          sx={{ width: '100%', height: '100%', bgcolor: '#ccc' }}
          component="nav"
          subheader={
            <ListSubheader component="h1"  >
              XXX管理后台
            </ListSubheader>
          }
        >
          {renderMenuItem()}
        </List>

      </Grid>
      <Grid item xs>
        <Stack direction={'row'} justifyContent={'space-between'} style={{ padding: '8px 16px', backgroundColor: '#ccc' }} >
          <div></div>
          <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={2}
            style={{ cursor: 'pointer' }}
            onMouseEnter={userMenuClick}
            id="composition-button"
            aria-controls={openUserMenu ? 'composition-menu' : undefined}
            aria-expanded={openUserMenu ? 'true' : undefined}
            aria-haspopup="true"
          >
            <Avatar alt="User name" src="https://mui.com/static/images/avatar/3.jpg" />
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>User name</div>
          </Stack>
          <Menu
            anchorEl={anchorEl}
            open={openUserMenu}
            id="composition-menu"
            onClose={userMenuColease}
          >
            <MenuItem  >Profile</MenuItem>
            <MenuItem  >My account</MenuItem>
            <MenuItem  >Logout</MenuItem>
          </Menu>
        </Stack>
        <div style={{
          padding: '16px',
          boxSizing: 'border-box',
          height: 'calc(100vh - 56px)',
          overflowY: 'auto'
        }}>
          <Outlet />
        </div>
      </Grid>

    </Grid>
  );
}

export default Layout;


