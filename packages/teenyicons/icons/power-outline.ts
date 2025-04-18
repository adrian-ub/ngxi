import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPowerOutlineIcon],svg[teenyicons-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" d="M7.5 8.5v-8M2.618 2.499A6.96 6.96 0 0 0 .5 7.495c0 3.864 3.135 7.005 7 7.005c3.867 0 7-3.141 7-7.005A6.97 6.97 0 0 0 12.395 2.5"></svg:path>`,
})
export class TeenyiconsPowerOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
