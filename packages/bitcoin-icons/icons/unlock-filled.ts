import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsUnlockFilledIcon],svg[bitcoin-icons-unlock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="14" height="10" x="5" y="11.225" fill="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M10 5.75a.75.75 0 0 0-.75.75V12a.75.75 0 0 1-1.5 0V6.5A2.25 2.25 0 0 1 10 4.25h4a2.25 2.25 0 0 1 2.25 2.25v2.522a.75.75 0 0 1-1.5 0V6.5a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsUnlockFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
