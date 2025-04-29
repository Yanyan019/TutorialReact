import React from 'react'
import styled from 'styled-components';
const Loading = () => {
  return (
    <div className='flex-col flex justify-center items-center gap-2 h-screen'>
        <p 
            className='text-[50px] font-bold text-center text-white'
            style={{ fontFamily: 'Hubot Sans, sans-serif' }}
        >
            DensityX
        </p>
        <StyledWrapper>
        <section className="dots-container">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
        </section>
        </StyledWrapper>
    </div>
  )
}

const StyledWrapper = styled.div`
  .dots-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .dot {
    height: 14px;
    width: 14px;
    margin-right: 8px;
    border-radius: 8px;
    background-color:rgb(228, 228, 229);
    animation: pulse 1.5s infinite ease-in-out;
  }

  .dot:last-child {
    margin-right: 0;
  }

  .dot:nth-child(1) {
    animation-delay: -0.3s;
  }

  .dot:nth-child(2) {
    animation-delay: -0.1s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.1s;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.8);
      background-color: rgb(228, 228, 229);
      box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
    }

    50% {
      transform: scale(1);
      background-color: #6793fb;
      box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
    }

    100% {
      transform: scale(0.8);
      background-color: rgb(228, 228, 229);
      box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
    }
  }`;


export default Loading