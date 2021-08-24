import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'router';
import ErrorBoundary from 'components/ErrorBoundary'
import 'assets/scss/index.scss';

class App extends React.Component {
    render(){
        return(
          <ErrorBoundary>
              <AppRouter />
          </ErrorBoundary>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)