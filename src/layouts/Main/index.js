import React from "react"
import { Helmet } from "react-helmet"
import Bg from "@/components/Bg"
import Menu from "@/components/Menu"
import Footer from "@/components/Footer"
import Cookies from "@/components/Cookies"
import Promo from "@/components/Promo"
import Features from "@/components/Features"
import Switcher from "@/components/Switcher"
import Submenu from "@/components/Submenu"

export default ({ children }) => (
  <div>
    <Helmet titleTemplate="Ray Wallet - %s" title="Cardano Advanced Light Wallet">
      <meta property="og:url" content="https://rraayy.com" />
      <meta
        name="description"
        content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances in one place."
      />
    </Helmet>
    <Bg />
    <Menu />
    <Switcher />
    <Promo />
    <Submenu />
    {children}
    <Features />
    <Footer />
    <Cookies />
  </div>
)
