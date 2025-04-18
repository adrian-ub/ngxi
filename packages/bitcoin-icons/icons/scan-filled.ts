import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsScanFilledIcon],svg[bitcoin-icons-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.25 14a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h2.75v-2.75a.75.75 0 0 1 .75-.75m-12.5 0a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75M14 5.75a.75.75 0 0 1 .75-.75h3.496a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.5H14.75a.75.75 0 0 1-.75-.75m-9 0A.75.75 0 0 1 5.75 5h3.5a.75.75 0 0 1 0 1.5H6.5v2.75a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsScanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
