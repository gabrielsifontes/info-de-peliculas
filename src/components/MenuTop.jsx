import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import PopCornsLogo from "../assets/logo.svg"

import "./MenuTop.scss"

import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: 'rgb(6, 55, 115)',
  },
});


export default function MenuTop() {
  return (
    <div className="menu-top">
      <img className="menu-top__logo" 
        src={PopCornsLogo} 
        alt="Info de peliculass" /> 
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "40px" }}        
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/new-movies">Ultimos lanzamientos</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/popular">Populares</Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link to="/search">Buscador</Link>
        </Menu.Item>
      </Menu>       
    </div>
  )
}
