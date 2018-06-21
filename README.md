# Custom Event Dispatcher #
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![npm version](https://badge.fury.io/js/custom-event-js.svg)](https://badge.fury.io/js/custom-event-js)


## Getting Custom Event Dispatcher ##
#### npm
`npm install --save custom-event-js`

#### yarn
`yarn add custom-event-js --save`

## Example ##
```javascript
import CustomEvent from 'custom-event-js'

// Listen event 'SHOW_NAME'
CustomEvent.ON('SHOW_NAME', (detail) => {
    console.log(detail) // { name: 'GitHub' }
})

// Dispatch event 'SHOW_NAME' with data
CustomEvent.DISPATCH('SHOW_NAME', { name: 'GitHub' })

// Remove event listener
CustomEvent.OFF('SHOW_NAME')
```

## API
- ON(eventName<string>, callback<function>) add an appropriate event listener. When event gets fired callback will be called with **detail** argument

- DISPATCH(eventName<string>, detail<object>) dispatch event to all event listeners

- OFF(eventName<string>) remove event listener
    


## Contributing

Any contributions you make **are greatly appreciated**.

Please read the [Contributions Guidelines](CONTRIBUTING.md) before submitting a PR.

## License

MIT © [Vasyl Stokolosa](https://about.me/shystruk)
