import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBillIcon],svg[picon-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4c0-2 6-2 6 0S1 6 1 4m7 2V2H0v4m4-1h1V3H3l1 1"></svg:path>`,
})
export class PiconBillIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
