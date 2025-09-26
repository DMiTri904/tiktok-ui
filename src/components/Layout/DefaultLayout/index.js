import Header from "./Header"
import Sideabar from "./Sidebar"

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sideabar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout