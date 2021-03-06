import { Button} from '@material-ui/core'
import {React, useState} from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import {database} from './firebase_console'
import firebase from 'firebase'

const InputBoxWrapper = styled.div`
    border-radius: 2px;
    > form {
        position: absolute;
        display: flex;
        flex: .4;
    }

    > form > input {
        position: fixed;
        bottom: 0px;
        padding: 15px;
        border: 1px solid lightblue;
        width: 100%;
        margin-bottom:0px;
    }

    > form > button {
        display: none !important;
    }

`

function InputBox(channelId, channelName) {
    const [message, setMessage] = useState("")

    const handleMessageSent = (e) => {
        e.preventDefault()

        if (!channelId) {
            return false;
        }

        database.collection("Channel").doc(channelId.channelId).collection('messages').add({
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: 'BF',
            userImg: ""
        })

        setMessage("")

    }



    return (
        <InputBoxWrapper>
            <form>
                <input
                    multiline
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button hidden type='submit' onClick={handleMessageSent} style={{display: "none !important"}}>
                    <SendIcon/>
                </Button>
            </form>
        </InputBoxWrapper>
    )
}

export default InputBox
