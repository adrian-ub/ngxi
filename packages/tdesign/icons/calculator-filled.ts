import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalculatorFilledIcon],svg[tdesign-calculator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h18v6H3zm0 7.996h18V23H3zm8 6.002v-2H7v2zm6 0v-2h-4v2zm-6 2H7v2h4zm6 2v-2h-4v2z"></svg:path>`,
})
export class TdesignCalculatorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
