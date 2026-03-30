function withStyle(WrapppedComponent) {
    return function NewComponent(props) {

        return (
            <div style={{border: '3px solid black',padding: 20}}>
                <WrapppedComponent {...props}/>
            </div>
    )
    }
}

export default withStyle