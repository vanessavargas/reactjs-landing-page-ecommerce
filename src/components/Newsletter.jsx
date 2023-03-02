import React from "react";

export default function Newsletter () {
    return (
        <div className="news">
            <div id="content">
                <h3>Cadastre-se e fique por dentro das novidades e promoções</h3>
                <form id="form">
                <input
                    className="input"
                    type="email"
                    placeholder="E-mail"
                    id="email"
                    required
                />
                <input className="button-home" type="submit" value="ENVIAR" />
                </form>
            </div>
        </div>
    )
}