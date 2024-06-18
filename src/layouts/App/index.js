import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import App from './App'


import { getIdentitySelector } from './selectors'
import { getIdentity } from './actions'

const mapStateToProps = createStructuredSelector({
    identity: getIdentitySelector()
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        getIdentity
    }, dispatch)

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(App)