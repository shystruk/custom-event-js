# Custom Event Dispatcher [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?hashtags=javascript&original_referer=https%3A%2F%2Fpublish.twitter.com%2F%3FbuttonHashtag%3Djavascript%26buttonText%3DEvent%2520dispatcher%2520based%2520on%2520the%2520CustomEvent%2520interface%26buttonType%3DTweetButton%26buttonUrl%3Dhttps%253A%252F%252Fwww.npmjs.com%252Fpackage%252Fcustom-event-js%26buttonVia%3Dshystrukk%26lang%3Den%26widget%3DButton&ref_src=twsrc%5Etfw&text=Event%20dispatcher%20based%20on%20the%20CustomEvent%20interface&tw_p=tweetbutton&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcustom-event-js&via=shystrukk) #
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![npm version](https://badge.fury.io/js/custom-event-js.svg)](https://badge.fury.io/js/custom-event-js)

The Custom Event Dispatcher provides the ability to communicate inside your application by dispatching events and listening to them. It also runs polyfill for Internet Explorer 9 and higher. What is the CustomEvent interface you may find [here](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent). 

> **Custom Event Dispatcher works in all popular browsers, including Internet Explorer 9 and higher.**

## Install ##
#### npm
`npm install --save custom-event-js`

#### yarn
`yarn add custom-event-js --save`

## Example ##
```javascript
import CustomEvent from 'custom-event-js'

// Listen event 'SHOW_NAME'
CustomEvent.ON('SHOW_NAME', (data) => {
    console.log(data.detail) // { name: 'GitHub' }
})

// Dispatch event 'SHOW_NAME' with data
CustomEvent.DISPATCH('SHOW_NAME', { name: 'GitHub' })

// Remove event listener
CustomEvent.OFF('SHOW_NAME')
```

## API
- **ON(eventName, callback)** add an appropriate event listener. When event gets fired callback will be called with **detail** argument

- **DISPATCH(eventName, detail)** dispatch event to all event listeners

- **OFF(eventName)** remove event listener


## Contributing

Any contributions you make **are greatly appreciated**.

Please read the [Contributions Guidelines](CONTRIBUTING.md) before submitting a PR.

## License

MIT © [Vasyl Stokolosa](https://about.me/shystruk)
