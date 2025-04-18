import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWalletIcon],svg[streamline-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 10.5v2a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V5a3 3 0 0 1 3-3H10v2.5"></svg:path><svg:path d="M13 7.5H9.5A.5.5 0 0 0 9 8v2a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5m-1 0v-2a1 1 0 0 0-1-1H3.5"></svg:path></svg:g>`,
})
export class StreamlineWalletIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
