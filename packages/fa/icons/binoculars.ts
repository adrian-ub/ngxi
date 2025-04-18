import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBinocularsIcon],svg[fa-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 320v768q0 26-19 45t-45 19v576q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-512l249-873q7-23 31-23zm320 0v704H768V320zm768 896v512q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-576q-26 0-45-19t-19-45V320h424q24 0 31 23zM736 32v224H384V32q0-14 9-23t23-9h288q14 0 23 9t9 23m672 0v224h-352V32q0-14 9-23t23-9h288q14 0 23 9t9 23"></svg:path>`,
})
export class FaBinocularsIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
