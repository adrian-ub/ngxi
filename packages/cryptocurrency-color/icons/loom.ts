import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorLoomIcon],svg[cryptocurrency-color-loom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#48BEFF"></svg:circle><svg:g fill="#FFF"><svg:path d="M22.194 26.239L5.81 14.744a4.247 4.247 0 0 1 0-6.953L9.78 5l16.386 11.494a4.247 4.247 0 0 1 0 6.953zM9.776 6.863L6.683 9.027a2.73 2.73 0 0 0 0 4.473l15.514 10.877l3.094-2.164a2.73 2.73 0 0 0 0-4.473z"></svg:path><svg:path d="m9.763 24.377l-3.09-2.167a2.73 2.73 0 0 1 0-4.473l8-5.583l-1.32-.928l-7.544 5.268a4.247 4.247 0 0 0 0 6.953l3.957 2.779l4.897-3.429l-1.314-.926zM26.17 7.797L22.21 5.02l-4.9 3.429l1.314.925l3.58-2.505l3.09 2.167a2.73 2.73 0 0 1 0 4.473l-8 5.582l1.315.926l7.554-5.277a4.247 4.247 0 0 0 0-6.953l.008.01z"></svg:path><svg:path d="m6.746 15.829l6.23-4.362l.868 1.24l-6.231 4.362zm17.75-1.758l-3.035 2.125l.868 1.241l3.142-2.204c-.334-.382-.657-.772-.981-1.163z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorLoomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
