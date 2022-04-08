import {useEffect, useState} from 'react';
import styled from 'styled-components'
import propTypes from "prop-types";

import { ReactComponent as CameraIcon } from '../../../assets/icons/camera.svg'

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  background-color: #bfbfbf;
  transition: 0.3s all ease;

  .input {
    display: inline-block;
    visibility: hidden;
    transition: 0.3s all ease;
  }
  &:hover .input {
    visibility: visible;
  }

  input {
    display: none;
  }
  label,
  label div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
    transition: 0.3s all ease;
  }
`

const Avatar = () => {
  const [isSquare, setIsSquare] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreciew] = useState(null)
  useEffect(() => {
    const objUrl = selectedFile && URL.createObjectURL(selectedFile)
    setPreciew(objUrl)
    return () => URL.revokeObjectURL(objUrl)
  }, [selectedFile]);


  return (
    <Wrapper isSquare={isSquare}>
      <input
        id='Avatar'
        type='file'
        value=''
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <label htmlFor='Avatar'>
        {preview ? (
          <div
            style={{
              backgroundImage: `url(${preview})`,
              backgroundSize: 'cover',
            }}
          />
        ) : (
          <CameraIcon />
        )}
      </label>
      <div style={{margin: '5px'}} className="ui-switch input">
        <input type="checkbox" id="switch-Xf1" onClick={()=>{setIsSquare(!isSquare)}}/>
        <label htmlFor="switch-Xf1" />
      </div>
    </Wrapper>
  )
}

Avatar.propTypes = {
  isSquare: propTypes.bool,
}

Avatar.defaultProps = {
  isSquare: false,
}


export default Avatar;
