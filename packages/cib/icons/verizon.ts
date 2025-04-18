import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibVerizonIcon],svg[cib-verizon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.401 0h4.932v.005L14.234 32h-4.021L2.666 16h4.969l4.599 9.781z"></svg:path>`,
})
export class CibVerizonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
