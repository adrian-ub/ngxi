import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLockScreenIosIcon],svg[arcticons-lock-screen-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="34.641" cy="13.52" r="8.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.082 21.41v15.743a5.335 5.335 0 0 1-5.347 5.347h-20.05a5.335 5.335 0 0 1-5.346-5.347v-20.05a5.335 5.335 0 0 1 5.347-5.346h16.131"></svg:path><svg:rect width="9.357" height="6.683" x="15.59" y="26.447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.337" ry="1.337"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.817 26.463l-.006-2.838c.006-1.282-1.366-2.936-3.476-2.97c-2.111-.034-3.408 1.705-3.426 3.071l.018 2.721m3.407 2.078v.873"></svg:path><svg:circle cx="20.334" cy="30.334" r=".936" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLockScreenIosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
