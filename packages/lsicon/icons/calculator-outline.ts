import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCalculatorOutlineIcon],svg[lsicon-calculator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 4.5h5.5V5h-5v.5m0 0H11m-5.5 0H5m5.5 6.5V9m0-1V7M8 10V9m0-1V7m0 4v1m-2.5 0v-1m0-1V9m0-1V7m7-4v10a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5Z"></svg:path>`,
})
export class LsiconCalculatorOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
