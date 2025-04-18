import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psTwitterIcon],svg[ps-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290 347H176q-24 0-40-16q-17-19-17-41v-40h162q22 0 38-16t16-38t-16-37q-15-16-38-16H119V59q0-24-16-40Q86 2 62 2Q37 2 21 18Q4 35 4 59v231q0 71 51 122q49 50 121 50h114q24 0 41-17t17-40q0-24-17-41q-19-17-41-17"></svg:path>`,
})
export class PsTwitterIcon {
  readonly viewBox = input("0 0 352 488")
  readonly width = input("0.73em")
  readonly height = input("1em")
}
