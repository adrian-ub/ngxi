import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRadioCircleIcon],svg[bx-radio-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12c0 3.859 3.14 7 7 7s7-3.141 7-7s-3.141-7-7-7s-7 3.141-7 7m12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5"></svg:path>`,
})
export class BxRadioCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
