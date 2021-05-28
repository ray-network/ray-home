import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Cardano Wiki" />
      <div className="ray__block">
        [cardano]
      </div>
    </LayoutWiki>
  )
}