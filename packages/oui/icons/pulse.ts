import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPulseIcon],svg[oui-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 5.026l4 9.333l2.44-5.692h2.893V7.333H11.56L10 10.974L6 1.641L3.56 7.333H.667v1.334H4.44z"></svg:path>`,
})
export class OuiPulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
