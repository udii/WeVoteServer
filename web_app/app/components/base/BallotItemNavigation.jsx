import React from "react";
import { Link } from "react-router";

// This navigation is for returns to prior page, combined with the option to select "More Opinions".
export default class BallotItemNavigation extends React.Component {
	render() {
        var back_to_link;
        if (this.props.back_to_ballot) {
            back_to_link = <Link to="ballot">&lt; Back to My Ballot</Link>;
        } else {
            back_to_link = <Link to="ballot">&lt; Back</Link>;
        }
        var more_opinions_link;
        if (this.props.is_measure) {
            more_opinions_link = <Link to="ballot_measure_opinions"><span className="icon_more_opinions"></span>&nbsp;More Opinions</Link>;
        } else {
            more_opinions_link = <Link to="ballot_candidate_opinions"><span className="icon_more_opinions"></span>&nbsp;More Opinions</Link>;
        }
		return <div className="row">
            <nav className="navbar navbar-main navbar-fixed-top">
                <div className="container-fluid">
                    <div className="left-inner-addon">
                        {/* We switch between "Back" and "Back to My Ballot" */}
                        <p className="text-left">{back_to_link}</p>
                        {/* We switch between ballot_candidate_opinions and ballot_measure_opinions */}
                        <p className="text-right">{more_opinions_link}</p>
                    </div>
                </div>
            </nav>
		</div>;
	}
}
