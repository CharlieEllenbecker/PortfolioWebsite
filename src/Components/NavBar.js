import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
    const [navOption, setActiveNav] = useState("/home");

    const displayNavChange = (selectedNavKey) => {
        setActiveNav(selectedNavKey)
        alert(`Selected: ${selectedNavKey}`);
    }

    return (
        <Navbar sticky="top" bg="light">
            <Nav activeKey={navOption} onSelect={(selectedNavKey) => displayNavChange(selectedNavKey)}>
                <Nav.Item>
                    <Nav.Link href="disabled" disabled>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}