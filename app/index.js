import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Results from './components/Results'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <Router>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />

              <Routes>
                <Route exact path='/' element={<Popular />} />
                <Route exact path='/battle' element={<Battle />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
