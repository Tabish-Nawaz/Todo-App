function withAuth(WrappedComponent){
    return function Protected(props){
        const isLoggedIn = true;

        if(!isLoggedIn) return <h3>Please Login to Continue...</h3>
        return <WrappedComponent {...props} />
    }
}
export default withAuth