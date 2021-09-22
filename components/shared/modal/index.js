import React from 'react'

export default function Modal({ isOpen, onClose, children }) {
  return (
    <div>
      <div className={`modal ${isOpen ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{children.title}</p>
          </header>
          <section className="modal-card-body">
            {/* Modal content */}
            {children.body}
          </section>
          <footer className="modal-card-foot is-justify-content-flex-end">
            {children.footer}
          </footer>
        </div>
      </div>
    </div>
  )
}
