import React, { Fragment } from 'react'
import Head from 'next/head';

function Layout(props) {

    return (
     <Fragment>
         <Head>
             <html lang="en"/>
             <meta name="description" content="A windows 11 Layout clone"/>
             <meta name="keywords" content="HTML, CSS, JavaScript, windows, clone" />
             <meta name="author" content="Ankush Sharma"/>
            <title>Windows 11</title>
            
         </Head>
         <main>
             {props.children}
         </main>
     </Fragment>
    )
}

export default Layout
