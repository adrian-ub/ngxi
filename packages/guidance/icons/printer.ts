import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePrinterIcon],svg[guidance-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 13.5c0 4.5-2 7.5-2 7.5v.5h17V21s-2-3-2-7.5m-13-6v-5h13v5M3 13.5h18m-18 4H.5v-10h23v10H21"></svg:path>`,
})
export class GuidancePrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
