import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsMoonOutlineIcon],svg[bitcoin-icons-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M20.434 13.934a6.5 6.5 0 0 1-7.367-7.367A6.501 6.501 0 0 0 14 19.5a6.5 6.5 0 0 0 6.433-5.566Z"></svg:path><svg:path stroke-linecap="round" d="M4.5 8.75v1.5m.75-.75h-1.5m3.75-6v2m1-1h-2"></svg:path></svg:g>`,
})
export class BitcoinIconsMoonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
