import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorXcpIcon],svg[cryptocurrency-color-xcp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#ED1650"></svg:circle><svg:path fill="#FFF" d="M23.48 10h-4.044a.62.62 0 0 0-.44.186l-7.375 7.529a.62.62 0 0 1-.44.186H9.829a.62.62 0 0 1-.44-.186l-.956-.974a.64.64 0 0 1-.183-.447v-1.377a.64.64 0 0 1 .183-.448l.956-.974a.62.62 0 0 1 .44-.186h1.352c.165 0 .323.067.44.186l.587.598a.614.614 0 0 0 .88 0l1.419-1.444a.64.64 0 0 0 0-.896l-1.54-1.567a.62.62 0 0 0-.44-.186H8.483a.62.62 0 0 0-.44.186l-2.86 2.912a.64.64 0 0 0-.182.448v4.118c0 .168.066.33.182.448l2.86 2.913a.62.62 0 0 0 .44.185h4.045a.62.62 0 0 0 .44-.186l7.375-7.528a.62.62 0 0 1 .44-.187h1.352c.165 0 .323.067.44.186l.956.974a.64.64 0 0 1 .183.448v1.377a.64.64 0 0 1-.183.447l-.956.974a.62.62 0 0 1-.44.186h-1.352a.62.62 0 0 1-.44-.186l-.592-.603a.614.614 0 0 0-.875-.005l-1.75 1.742a.64.64 0 0 0-.187.453v4.04c0 .35.279.634.622.634h2.04a.63.63 0 0 0 .623-.633v-1.5c0-.35.279-.633.622-.633h2.635a.62.62 0 0 0 .44-.185l2.86-2.913a.64.64 0 0 0 .183-.448v-4.118a.64.64 0 0 0-.182-.448l-2.86-2.912a.62.62 0 0 0-.44-.186"></svg:path></svg:g>`,
})
export class CryptocurrencyColorXcpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
