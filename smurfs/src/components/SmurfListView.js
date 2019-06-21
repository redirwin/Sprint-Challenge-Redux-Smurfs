import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSmurfList } from "../actions";
import Smurf from "./Smurf";

class SmurfListView extends React.Component {
  componentDidMount() {
    this.props.getSmurfList();
  }

  render() {
    return (
      <div className="smurfs-list-wrapper">
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.name} smurf={smurf} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.reducer.smurfs
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSmurfList }
  )(SmurfListView)
);
