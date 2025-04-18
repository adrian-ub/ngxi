import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPodcastOutlineIcon],svg[bitcoin-icons-podcast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="7" height="12" x="8.5" y="3.5" stroke-linejoin="round" rx="3.5"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.5 11.5h2m3 0h2m-7-2h2m3 0h2m-7-2h2m3 0h2"></svg:path><svg:path d="M12 18v2.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.5 20.5h7"></svg:path><svg:path stroke-linecap="round" d="M6.408 14.175a6 6 0 0 0 11.084.241"></svg:path></svg:g>`,
})
export class BitcoinIconsPodcastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
