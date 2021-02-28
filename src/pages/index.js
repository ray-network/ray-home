import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"

export default () => {
  return (
    <Layout>
      <Helmet title="Cardano Advanced Light Wallet" />
      <div className="ray__block">
        <div className="container-fluid">
          [wallet]
        </div>
      </div>
    </Layout>
  )
}
