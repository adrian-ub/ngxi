import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVsphereMobileClientIcon],svg[arcticons-vsphere-mobile-client-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.564 17.32V7.128A2.636 2.636 0 0 0 28.936 4.5H11.843a2.636 2.636 0 0 0-2.628 2.628v33.744a2.636 2.636 0 0 0 2.628 2.628h17.093a2.636 2.636 0 0 0 2.628-2.628v-1.694"></svg:path><svg:circle cx="30.037" cy="28.361" r="8.473" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.785 39.423l-3.653-4.296M18.057 8.037h4.666M11.966 18.106h3.144l1.62 2.996l2.113-6.877l1.277 3.881h2.848"></svg:path><svg:circle cx="20.39" cy="39.718" r="1.174" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsVsphereMobileClientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
