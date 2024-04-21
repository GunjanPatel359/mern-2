import './App.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import Store from './redux/store.js'
import { loadSeller, loadUser } from './redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import SellerProtectedRoute from './SellerProtectedRoute'
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  // CheckoutPage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage
} from './Routes.js'

import {ShopHomePage} from "./ShopRoutes"


function App () {
  // const navigate=useNavigate();
  const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(loadUser(dispatch))
    dispatch(loadSeller(dispatch))
  }, [])
  const { loading,isAuthenticated } = useSelector(state => state.user)
  const { isSeller,isLoading} = useSelector(state => state.seller)

  return (
    <>
      {loading || isLoading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/activation/:activation_token' element={<ActivationPage />}/>
            <Route path='/seller/activation/:activation_token' element={<SellerActivationPage />}/>
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product/:name' element={<ProductDetailsPage />} />
            <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ProfilePage /></ProtectedRoute>} />
            <Route path='/best-selling' element={<BestSellingPage />} />
            {/* <Route path='/checkout' element={<ProtectedRoute isAuthenticated={isAuthenticated}><CheckoutPage /></ProtectedRoute>} /> */}
            {/* shop routes */}
            <Route path='/shop-create' element={<ShopCreatePage />}/>
            <Route path='/shop-login' element={<ShopLoginPage />}/>
            <Route path='/shop/:id' element={<SellerProtectedRoute isSeller={isSeller}><ShopHomePage /></SellerProtectedRoute>}/>
            <Route path='/events' element={<EventsPage />} />
            <Route path='/faq' element={<FAQPage />} />
          </Routes>
 

          <ToastContainer
            position='bottom-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
        </BrowserRouter>
      )}
    </>
  )
}

export default App
