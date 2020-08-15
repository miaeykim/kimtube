import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Subscribe(props) {

    const userTo = props.userTo
    const userFrom = props.userFrom

    const [SubscribeNumber, setSubscribeNumber] = useState(0)
    const [Subscribed, setSubscribed] = useState(false)

    const onSubscribe = () => {

        let subscribeVariables = {
            userTo: userTo,
            userFrom: userFrom
        }

        if(Subscribed) {
            Axios.post('/api/subscribe/unSubscribe', subscribeVariables)
            .then(response => {
                if(response.data.success) {
                    setSubscribeNumber(SubscribeNumber - 1)
                    setSubscribed(!Subscribed)
                } else{
                    alert('Failed to unsubscribe.')
                }
            })

        } else{
            Axios.post('/api/subscribe/subscribe', subscribeVariables)
            .then(response => {
                if(response.data.success) {
                    setSubscribeNumber(SubscribeNumber + 1)
                    setSubscribed(!Subscribed)
                } else{
                    alert('Failed to subscribe.')
                }
            })
        }
    }

    useEffect(() => {

        const subscribeNumberVariables = { userTo: userTo, userFrom: userFrom }
        Axios.post('/api/subscribe/subscribeNumber', subscribeNumberVariables)
        .then(response => {
            if(response.data.success) {
                setSubscribeNumber(response.data.subscribeNumber)
            } else{
                alert('Failed to get subscriber info.')
            }
        })

        Axios.post('/api/subscribe/subscribed', subscribeNumberVariables)
        .then(response => {
            if(response.data.success) {
                setSubscribed(response.data.subscribed)
            } else{
                alert('Failed to load subscription info.')
            }
        })
        
    }, [])

    return (
        <div>
            <button style={{
                backgroundColor: `${Subscribed ? '#AAAAAA' : '#CC0000'}`,
                borderRadius: '4px', color: 'white',
                padding: '10px 16px', fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'
            }}
            onClick={onSubscribe}
            >
                {SubscribeNumber} {Subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
        </div>
    )
}

export default Subscribe
