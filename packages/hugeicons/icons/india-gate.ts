import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsIndiaGateIcon],svg[hugeicons-india-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 22h20m-7 0v-5.727C15 14.465 13.657 13 12 13s-3 1.465-3 3.273V22m8-12h3M4 10h3m4.5 0h1"></svg:path><svg:path d="M4 22V6h16v16M5 6V5c0-1.414 0-2.121.44-2.56C5.878 2 6.585 2 8 2h8c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5v1M3 6h18"></svg:path></svg:g>`,
})
export class HugeiconsIndiaGateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
