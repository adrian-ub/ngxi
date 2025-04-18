import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAirplaneOffIcon],svg[zmdi-airplane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235 152l170 107v42l-67-21l-167-167V35q0-14 9-23t22.5-9t23 9t9.5 23zM21 72l27-27l336 336l-27 27l-122-122v79l42 32v32l-74-21l-75 21v-32l43-32V248L0 301v-42l128-80z"></svg:path>`,
})
export class ZmdiAirplaneOffIcon {
  readonly viewBox = input("0 0 408 432")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
