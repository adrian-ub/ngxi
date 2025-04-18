import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineProgrammingRssSquareWirelessRssFeedSquareTransmitBroadcastIcon],svg[streamline-programming-rss-square-wireless-rss-feed-square-transmit-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:circle cx="4" cy="10" r=".5"></svg:circle><svg:path d="M4.5 6.5a3 3 0 0 1 3 3m-3-6a6 6 0 0 1 6 6"></svg:path></svg:g>`,
})
export class StreamlineProgrammingRssSquareWirelessRssFeedSquareTransmitBroadcastIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
