import React from 'react'

const HeaderGeneric = (props) => (
    <header id="header">
        <h1>{props.pageTitle}</h1>
        <p>{props.pageSummary}</p>
    </header>
)

export default HeaderGeneric
