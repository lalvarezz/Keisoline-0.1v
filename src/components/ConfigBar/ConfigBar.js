import './ConfigBar.css';
import React, { useState } from "react";


function ConfigBar() {
    
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (itemIndex) => {
        setSelectedItem(itemIndex);
    };

    return (
        <>
            <div className="configbar-component">
                <header>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="15 6 9 12 15 18" />
                </svg>
                    <h1>Configuración</h1>
                </header>
                <main className="container-config">
                    <h2>Perfil</h2>
                    <div className="rlinea"> <hr/> </div>
                    <ul>
                        <li onClick={() => handleItemClick(0)}
                        className={selectedItem === 0 ? "selected" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.7" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="7" r="4" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <h3>Cuenta</h3>
                        </li>
                        <li onClick={() => handleItemClick(1)}
                        className={selectedItem === 1 ? "selected" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.7" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <circle cx="12" cy="16" r="1" />
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg>
                            <h3>Seguridad</h3>
                        </li>
                        <li onClick={() => handleItemClick(2)}
                        className={selectedItem === 2 ? "selected" : ""}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.7" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                            <h3>Notificaciones</h3>
                        </li>
                    </ul>
                </main>
            </div>
        </>
    );
}

export default ConfigBar;