import { checkUser } from "@/lib/checkUser"

export default function Navbar() {
    const user = checkUser();
  return (
    <div className="flex items-center justify-center">Navbar</div>
  )
}
