import './App.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import Store from './redux/store.js'
import { loadSeller, loadUser } from './redux/actions/user'
import { useDispatch } from 'react-redux'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import SellerProtectedRoute from './routes/SellerProtectedRoute.jsx'
import { getAllProducts} from "./redux/actions/product"
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
  ShopLoginPage,
} from './routes/Routes.js'

import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage
} from "./routes/ShopRoutes"

import {
  ShopHomePage,
} from "./ShopRoutes"
import { getAllEvents} from './redux/actions/event.js'


function App () {
  const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(loadUser(dispatch))
    dispatch(loadSeller(dispatch))
    dispatch(getAllProducts())
    dispatch(getAllEvents())
    console.log("counting")
  }, [])

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/sign-up' element={<SignupPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product/:id' element={<ProductDetailsPage />} />
            <Route path='/best-selling' element={<BestSellingPage />} />
            <Route path='/events' element={<EventsPage />} />
            <Route path='/faq' element={<FAQPage />} />
            <Route path='/activation/:activation_token' element={<ActivationPage />}/>
            <Route path='/seller/activation/:activation_token' element={<SellerActivationPage />}/>
            <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            {/* <Route path='/checkout' element={<ProtectedRoute isAuthenticated={isAuthenticated}><CheckoutPage /></ProtectedRoute>} /> */}
            {/* shop routes */}
            <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
            <Route path='/shop-create' element={<ShopCreatePage />}/>
            <Route path='/shop-login' element={<ShopLoginPage />}/>
            <Route path='/shop/:id' element={<SellerProtectedRoute><ShopHomePage /></SellerProtectedRoute>}/>
            <Route path='/dashboard' element={<SellerProtectedRoute><ShopDashboardPage/></SellerProtectedRoute>}/>
            <Route path='/dashboard-create-product' element={<SellerProtectedRoute><ShopCreateProduct/></SellerProtectedRoute>}/>
            <Route path='/dashboard-products' element={<SellerProtectedRoute><ShopAllProducts/></SellerProtectedRoute>}/>
            <Route path='/dashboard-create-event' element={<SellerProtectedRoute><ShopCreateEvents/></SellerProtectedRoute>}/>
            <Route path='/dashboard-events' element={<SellerProtectedRoute><ShopAllEvents/></SellerProtectedRoute>}/>
            <Route path='/dashboard-coupouns' element={<SellerProtectedRoute><ShopAllCoupouns /></SellerProtectedRoute>}/>
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
    </>
  )
}

export default App
