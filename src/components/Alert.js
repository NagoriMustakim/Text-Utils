import React from 'react'

export const Alert = (props) => {
    return (
        props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-3`} role="alert">
            <strong>  {props.alert.type}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button>
        </div>


    )
}
