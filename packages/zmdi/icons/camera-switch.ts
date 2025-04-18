import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraSwitchIcon],svg[zmdi-camera-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 45q18 0 30.5 12.5T427 88v256q0 18-12.5 30.5T384 387H43q-18 0-30.5-12.5T0 344V88q0-18 12.5-30.5T43 45h67l39-42h128l39 42zM277 291l75-75l-75-75v54H149v-54l-74 75l74 75v-54h128z"></svg:path>`,
})
export class ZmdiCameraSwitchIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
