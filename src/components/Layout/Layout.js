import React, { Component } from "react"

import Aux from "../../hoc/Aux"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
import classes from "./Layout.css"

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                />
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout
