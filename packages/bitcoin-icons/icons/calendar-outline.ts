import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCalendarOutlineIcon],svg[bitcoin-icons-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M5.5 8A1.5 1.5 0 0 1 7 6.5h10A1.5 1.5 0 0 1 18.5 8v.5h-13z"></svg:path><svg:path stroke-linecap="round" d="M16 5v2M8 5v2"></svg:path><svg:path d="M5.5 10.5h13V16a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16z"></svg:path><svg:path stroke-linecap="round" d="M15.75 12.25h1m-3.833 0h1m-3.834 0h1M7.25 14h1m7.5 0h1m-3.833 0h1m-3.834 0h1M7.25 15.75h1m4.667 0h1m-3.834 0h1"></svg:path></svg:g>`,
})
export class BitcoinIconsCalendarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
