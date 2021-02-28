import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"

export default () => {
  return (
    <Layout>
      <Helmet title="Ray Token" />
      <div className="ray__block">
        <div className="container-fluid">
          [ray-token]
        </div>
      </div>
    </Layout>
  )
}
