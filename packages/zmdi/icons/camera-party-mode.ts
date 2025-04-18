import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCameraPartyModeIcon],svg[zmdi-camera-party-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 45q18 0 30.5 12.5T427 88v256q0 18-12.5 30.5T384 387H43q-18 0-30.5-12.5T0 344V88q0-18 12.5-30.5T43 45h67l39-42h128l39 42zm-171 64q-44 0-75 31.5T107 216q0 10 2 21h44q-4-10-4-21q0-27 19-45.5t45-18.5h85q-32-43-85-43m0 214q44 0 75.5-31.5T320 216q0-12-2-21h-45q4 10 4 21q0 27-18.5 45.5T213 280h-85q33 43 85 43"></svg:path>`,
})
export class ZmdiCameraPartyModeIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}
