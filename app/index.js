import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

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

              <React.Suspense fallback={<Loading />}>
                <Routes>
                  <Route exact path='/' element={<Popular />} />
                  <Route exact path='/battle' element={<Battle />} />
                  <Route exact path='/battle/results' element={<Results />} />
                </Routes>
              </React.Suspense>
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
