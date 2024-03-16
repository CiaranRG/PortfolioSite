import React from 'react';
import './Modal.scss'

// Defining classes for our props
type Modal = {
    isOpen: boolean,
    toggleModal: () => void,
    children: React.ReactNode,
}

export default function Modal({ isOpen, toggleModal, children }: Modal) {
    // Using a ternary operator to change the class stored in modalClass to be left if true and right if false
    const modalClass = isOpen ? "modalOverlay show" : "modalOverlay";
    return (
        // Assigning the class to the div and it will change based on the modalClass
        <div className={modalClass} onClick={toggleModal}>
            {/* The children will be what is between the modal in the parent component */}
            <div>{children}</div>
        </div>
    )
}