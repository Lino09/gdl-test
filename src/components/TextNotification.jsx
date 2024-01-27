import PropTypes from 'prop-types';
import { useState } from 'react';
import { formatPhoneNumber } from '../helpers';
import imagePlaceholder from '../assets/photo-icon.png'

const TextNotification = ({textMessage, sendReply, navigateToInboxThread, isVisible}) => {
  const {from, text, threadId} = textMessage;
  const [response, setResponse] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if(!response) return
    sendReply(response)
    setResponse('')
  }

  return (
    <div className={`origin-bottom-right fixed bottom-16 w-[299px] right-16 rounded-2xl shadow-around bg-white flex p-3 gap-4 transition-all transform ${isVisible ? 'scale-100': 'scale-0'}`}>
      <button
        className="w-[93px] shadow-lg bg-gradient-to-b from-[#1F83B9] to-[#1A4A8D] rounded-md flex items-center justify-center px-4 hover:opacity-90"
        onClick={() => navigateToInboxThread(threadId)}>
          <div className='w-16 h-16 flex items-center justify-center shadow-around-inner-dark rounded-full'>
            <img src={imagePlaceholder} className='h-6' />
          </div>
      </button>
      <div className="w-full flex flex-col items-start gap-2 text-xs">
        <div className='flex flex-col w-full'>
          <span className='text-gray-400 font-semibold'>New message from:</span>
          <span className='text-gray-400'>{formatPhoneNumber(from)}</span>
        </div>
        <q className='text-gray-500 leading-tight max-w-52'>{text}</q>
        <form onSubmit={submit}>
          <textarea
            className='rounded-md shadow-around-inner bg-white resize-none pl-2 pt-1 placeholder:font-bold h-[72px]'
            placeholder='Your reply to be sent'
            value={response}
            onChange={(e) => setResponse(e.target.value)}></textarea>
          <button type="submit"
            className=' shadow-lg text-sm mt-2 rounded-md bg-gradient-to-b from-[#7BCA10] to-[#619D10] hover:opacity-90 text-white flex w-full justify-center h-[33px] gap-2 font-bold items-center'>
            <img src={imagePlaceholder} className='h-4' /> Send Reply
          </button>
        </form>
        
      </div>
      
    </div>
  )
}

export default TextNotification;

TextNotification.propTypes = {
  textMessage: PropTypes.shape({from: PropTypes.string, text: PropTypes.string, threadId: PropTypes.string}),
  sendReply: PropTypes.func, 
  navigateToInboxThread: PropTypes.func,
  isVisible: PropTypes.bool 
}