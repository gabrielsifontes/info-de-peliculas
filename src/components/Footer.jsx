import { Layout } from "antd"

import "./Footer.scss"




export default function Footer() {
  let { Footer } = Layout

  return (
    <Footer className="footer">
      <p>Proyecto hecho en 2023/12/10 por Gabriel Sifontes, con idea de Agustín Navarro Galdón.</p>
    </Footer>
  )
}