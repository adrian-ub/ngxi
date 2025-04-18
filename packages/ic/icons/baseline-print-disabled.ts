import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselinePrintDisabledIcon],svg[ic-baseline-print-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.1 17H22v-6c0-1.7-1.3-3-3-3h-9zm-.1-7c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-1-3V3H6v1.1L9 7zM1.2 1.8L0 3l4.9 5C3.3 8.1 2 9.4 2 11v6h4v4h11.9l3 3l1.3-1.3zM8 19v-5h2.9l5 5z"></svg:path>`,
})
export class IcBaselinePrintDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
