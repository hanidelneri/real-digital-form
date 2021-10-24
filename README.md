# real-digital-form

## Description

You can find a deployed version [here](https://real-digital-form.iran.liara.run/).


### Stack

Vue 2, Vue Cli Service, Sass, Jest, Vue Test Utils


### Components

1. `real-digital-form`: When form is submitted, this component finds all the children that are instance of `real-digital-textfield` and calls the `validate` method on each of them and populates an array of booleans storing the validation status of each field. When all items of this array are true, the form is valid and then the request to api is made.

2. `real-digital-textfield`: This component exposes a `validate` method that returns `true` if the field is valid, otherwise it returns `false` and makes the error message below the field visible.

3. `real-digital-button`: When this button is clicked, it first finds its immediate parent. If parent exists and exposes a `submit` method, the `submit` method is invoked.


### Available Commands

#### Project setup
```
npm install
```
#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Runs unit tests
```
npm run test:unit
```

### Areas for improvements

1. I would suggest resetting the form after successful validation for better usability. To requires `real-digital-textfield` to implement a `reset` method.

2. Right now, validation is only done when submit button is clicked, The better option would be to also call it when input is blurred.

3. The form component assumes that there is a `json` field in the response from api, It would be better to pass the name of this field as a prop to form component or make it more resilient by checking the existence of other properties in the response.


