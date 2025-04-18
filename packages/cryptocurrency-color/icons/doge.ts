import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorDogeIcon],svg[cryptocurrency-color-doge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#C3A634"></svg:circle><svg:path fill="#FFF" d="M13.248 14.61h4.314v2.286h-4.314v4.818h2.721q1.615 0 2.644-.437q1.029-.436 1.615-1.21a4.4 4.4 0 0 0 .796-1.815a11.4 11.4 0 0 0 .21-2.252a11.4 11.4 0 0 0-.21-2.252a4.4 4.4 0 0 0-.796-1.815q-.587-.774-1.615-1.21q-1.029-.437-2.644-.437h-2.721v4.325zm-2.766 2.286H9v-2.285h1.482V8h6.549q1.815 0 3.142.627q1.327.628 2.168 1.715q.84 1.086 1.25 2.543T24 16a11.5 11.5 0 0 1-.41 3.115q-.408 1.456-1.25 2.543q-.84 1.087-2.167 1.715q-1.328.627-3.142.627h-6.549z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorDogeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
