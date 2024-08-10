import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import Link from "next/link";
import ScrollTop from "@/components/scroll/ScrollTop";
import { usePathname } from "next/navigation";

type Props = {
    window?: () => Window;
};

const navItems = [
    "inicio",
    "precios",
    "servicio",
    "portafolio",
    "blog",
    "contacto",
];

const Navbar = (props: Props) => {
    const pathname = usePathname();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

/*     const dynamicStyles = (style) => {
        if (style == color)
        return 
    } */

    const drawer = (
        <Box 
        onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <MuiLink
                component={Link}
                href="/"
                sx={{ my: 2, p: 5 }}
                underline="none"
                color="inherit"
                prefetch={true}
            >
                <Typography variant="h6">Iunmy</Typography>
            </MuiLink>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item}>
                        <Link
                            href={item === "inicio" ? "/" : `/${item}`}
                            passHref
                            prefetch={false}
                        >
                            <Button
                                LinkComponent={Link}
                                sx={{
                                    "& .MuiTouchRipple-root": {
                                        color: "rgba(255, 87, 34, 0.3)", // Cambia el color del ripple solo para este botón
                                    },
                                }}
                            >
                                <Typography
                                    sx={{ fontWeight: 'bold' }}
                                    color={
                                        pathname == `/${item}`
                                            ? "white"
                                            : pathname == "/" && item == "inicio"
                                                ? "white"
                                                : "#CAD2FB"
                                    }
                                    component="span"
                                >
                                    {item.toUpperCase()}
                                </Typography>
                            </Button>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar color="inherit" component="nav" sx={{ padding: ".5rem" }}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <MuiLink
                            color="inherit"
                            component={Link}
                            underline="none"
                            href="/"
                            sx={{ display: { xs: "none", lg: "block" } }}
                            prefetch={false}
                        >
                            <Typography variant="h6">Iunmy</Typography>
                        </MuiLink>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "block" } }} />
                        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: "1rem" }}>
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={item === "inicio" ? "/" : `/${item}`}
                                    passHref
                                    prefetch={false}
                                >
                                    <Button
                                        LinkComponent={Link}
                                        color="inherit"
                                        sx={{
                                            "& .MuiTouchRipple-root": {
                                                color: "rgba(255, 87, 34, 0.3)", // Cambia el color del ripple solo para este botón
                                            },
                                        }}
                                    >
                                        <Typography
                                            color={
                                                pathname == `/${item}`
                                                    ? "primary"
                                                    : pathname == "/" && item == "inicio"
                                                        ? "primary"
                                                        : "initial"
                                            }
                                            component="span"
                                        >
                                            {item.toUpperCase()}
                                        </Typography>
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { lg: "none" } }}
                            LinkComponent={Link}
                            href="/"
                        >
                            <RocketLaunchIcon />
                        </IconButton>
                        <Box sx={{ display: { lg: "none" }, flexGrow: 1 }} />
                        <IconButton
                            size="small"
                            edge="start"
                            onClick={handleDrawerToggle}
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { lg: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    variant="temporary"
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", lg: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240, bgcolor: "#584AC4", color: "#CAD2FB" },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Box>
    );
};

export default Navbar;
