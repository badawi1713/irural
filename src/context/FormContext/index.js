import React, { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = (props) => {

    const [showUserForm, setShowUserForm] = useState(true)
    const [showISPForm, setShowISPForm] = useState(false)
    const [showSubmitView, setShowSubmitView] = useState(false)

    const showUserFormHandler = () => {
        setShowUserForm(true)
        setShowISPForm(false)
    }

    const showISPFormHandler = () => {
        setShowUserForm(false)
        setShowISPForm(true)
    }

    const showSubmitViewHandler = () => {
        setShowSubmitView(!showSubmitView)
    }

    return (
        <FormContext.Provider value={[showISPForm, showUserForm, showISPFormHandler, showUserFormHandler, showSubmitView, showSubmitViewHandler]}>
            {props.children}
        </FormContext.Provider>
    )
}

