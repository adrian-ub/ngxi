import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTransferFilledIcon],svg[bitcoin-icons-transfer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 15.243a.75.75 0 0 1 .75.75V19c0 .138.112.25.25.25h14a.25.25 0 0 0 .25-.25v-3.007a.75.75 0 0 1 1.5 0V19A1.75 1.75 0 0 1 19 20.75H5A1.75 1.75 0 0 1 3.25 19v-3.007a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M19.87 10.893c.3.286.311.76.025 1.06l-3.047 3.199a.75.75 0 0 1-1.086 0l-3.048-3.198a.75.75 0 1 1 1.086-1.035l2.505 2.628l2.504-2.628a.75.75 0 0 1 1.06-.026"></svg:path><svg:path d="M11.352 4.75A4.2 4.2 0 0 0 7.15 8.952v5.006a.75.75 0 0 1-1.5 0V8.952a5.702 5.702 0 0 1 11.405 0v5.006a.75.75 0 0 1-1.5 0V8.952a4.2 4.2 0 0 0-4.203-4.202"></svg:path></svg:g>`,
})
export class BitcoinIconsTransferFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
