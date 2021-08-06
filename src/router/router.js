import { Switch, Route } from 'react-router-dom'
import Mainview from '../modules/home/mainview'

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Mainview />
        </Route>
      </Switch>
    </>
  )
}

export default Router
