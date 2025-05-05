import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRadioIcon],svg[picon-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h1l6-3h1L2 3h6v5H0m1-3h6V4H1m3 4l1.5-1.5L4 5L2.5 6.5"></svg:path>`,
})
export class PiconRadioIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
