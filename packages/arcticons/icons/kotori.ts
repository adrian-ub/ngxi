import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKotoriIcon],svg[arcticons-kotori-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="25.502" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.878" ry="6.202"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.129 6.768a20.179 20.179 0 1 1-7.611 5.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.139 7.207a14.12 14.12 0 0 1 10.769 1.986m5.636.732a18.38 18.38 0 0 0-12.196-4.417"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.997 6.112A14.36 14.36 0 0 1 24 2.542c5.392-.357 8.1 1.659 9.304 3.038M12.152 7.459c-.437-.57-1.377-.963-3.39-.228c-4 1.46-4.367 6.392-1.077 6.257"></svg:path><svg:ellipse cx="14.889" cy="21.117" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.53" ry="5.083"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.094 31.532a8.34 8.34 0 0 1-5.47 2.103c-5.127 0-9.284-4.908-9.284-10.962s4.157-10.962 9.285-10.962A8.56 8.56 0 0 1 24 14.703"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="6" d="M12.392 20.295a4.34 4.34 0 0 0 4.456-2.395"></svg:path><svg:ellipse cx="33.111" cy="21.117" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.53" ry="5.083"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.906 31.532a8.34 8.34 0 0 0 5.47 2.103c5.127 0 9.284-4.908 9.284-10.962s-4.157-10.962-9.285-10.962A8.56 8.56 0 0 0 24 14.703"></svg:path><svg:path fill="none" stroke="currentColor" stroke-miterlimit="6" d="M30.767 20.295a4.34 4.34 0 0 0 4.456-2.395"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.753 38.55s.833-3.38-3.38-3.38s-4.277 3.403-6.773 3.403"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.753 38.595s.833 3.38-3.38 3.38s-4.277-3.403-6.773-3.403m10.153.023h-1.365m3.859-.045s-.833-3.38 3.38-3.38s4.277 3.403 6.773 3.403"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.247 38.595s-.833 3.38 3.38 3.38s4.277-3.403 6.773-3.403m-10.153.023h1.365"></svg:path><svg:ellipse cx="12.246" cy="9.537" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.278" ry="2.079" transform="rotate(-25.031 12.246 9.537)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-miterlimit="6" d="M12.635 7.966s.476-2.592 1.675-2.12s2.64 2.785 2.243 3.91s-1.2 1.07-2.856.607m-1.879.713s-.476 2.592-1.676 2.121s-2.638-2.785-2.242-3.91s1.2-1.07 2.856-.607"></svg:path>`,
})
export class ArcticonsKotoriIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
