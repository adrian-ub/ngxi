import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAirplaneIcon],svg[zmdi-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m405 301l-170-53v117l42 32v32l-74-21l-75 21v-32l43-32V248L0 301v-42l171-107V35q0-14 9-23t22.5-9t23 9t9.5 23v117l170 107z"></svg:path>`,
})
export class ZmdiAirplaneIcon {
  readonly viewBox = input("0 0 408 432")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
