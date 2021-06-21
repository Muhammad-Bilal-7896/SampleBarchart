import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import ChartBar from "../Components/ChartBar";

class AppRouter extends React.Component {
    render() {
        return (
                  <Router>
                      <Route exact path="/" component={ChartBar} />
                  </Router>

        )
    }
}
export default AppRouter;