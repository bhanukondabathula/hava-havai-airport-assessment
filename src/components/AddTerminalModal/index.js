import React, {useState} from 'react'
import Modal from 'react-modal'
import './index.css'

const AddTerminalModal = ({isOpen, onRequestClose}) => {
  const [terminalName, setTerminalName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const handleImageUpload = event => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  const handleSubmit = () => {
    // Add terminal logic here
    console.log('Terminal Name:', terminalName)
    console.log('Description:', description)
    console.log('Image:', image)
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='add-terminal-modal'
      overlayClassName='add-terminal-modal-overlay'
    >
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Terminal title</label>
          <input
            type='text'
            id='name'
            value={terminalName}
            onChange={e => setTerminalName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='file'
            className='form'
            id='fileupload'
            onChange={handleImageUpload}
          />
          {image && <img src={image} alt='Uploaded' />}
          <div className='modal-actions'>
            <button
              type='button'
              className='cancel-btn'
              onClick={onRequestClose}
            >
              Cancel
            </button>
            <button
              type='button'
              className='continue-btn'
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default AddTerminalModal
