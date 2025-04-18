import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsRocketOutlineIcon],svg[bitcoin-icons-rocket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M11.449 16.449L7.55 12.55C8.998 8.167 13.13 5 18 5q.485 0 .959.041q.04.474.041.96c0 4.87-3.165 9-7.552 10.448Z"></svg:path><svg:path stroke-linecap="round" d="m8 16l-1 1m2.5.5l-1 1m-2-4l-1 1"></svg:path><svg:circle cx="13" cy="11" r="1"></svg:circle><svg:path stroke-linecap="round" d="m14 6l4 4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 15.5V19l-9-9h3.5"></svg:path></svg:g>`,
})
export class BitcoinIconsRocketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
