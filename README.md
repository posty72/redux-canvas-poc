# Canvas with Redux
This project is to prove that Redux can be used to maintain the state of an HTML5 Canvas view.

## Motivation
A few years back I built a game using ES5 and HTML5 Canvas ([source code can be found here](https://github.com/posty72/good-company-game)). Since making that, I moved into creating data-driven applications powered by React and Redux. It's been sitting in the back of my head for a while, but I always wondered how it would look to maintain the state of a game using Redux. I also wanted to see how Redux looked outside of a React application.

## Next steps
- Add [redux-persist](https://github.com/rt2zz/redux-persist) so things stay sticky
- Implement [reselect](https://github.com/reactjs/reselect) so less calculations are required after getting state
- Add more complex components that "talk to each other"

## Tooling

There are four main tools I use to make this project work:
- Redux (duh) - Maintain the state of the application
- RxJS - For user interactions like touch and mouse events
- redux-observable - This hooks the RxJS observables up with the Redux message bus
- Webpack - Build everything together


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

All you need to run this is:
- Node 8+
- NPM 5+

### Installing

First we need to install our dependencies:
```
npm install
```

And then build our app:
```
npm run build
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Thank you to Peter Jang's post on Medium](https://medium.com/@peterxjang/a-functional-canvas-approach-with-redux-ce59a369241b)
