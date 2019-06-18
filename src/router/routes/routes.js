import Msite from '../../pages/Msite/Msite'
import Classify from '../../pages/Classify/Classify'
import General from '../../pages/General/General'
import Presonal from '../../pages/Personal/Presonal'
import ShopCart from '../../pages/ShopCart/ShopCart'
export default [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/general',
    component: General
  },{
    path: '/presonal',
    component: Presonal
  },
  {
    path: '/shopCart',
    component: ShopCart
  }
]
