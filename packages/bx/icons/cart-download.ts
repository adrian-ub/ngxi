import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCartDownloadIcon],svg[bx-cart-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m14 13.99l4-5h-3v-4h-2v4h-3z"></svg:path><svg:path fill="currentColor" d="M17.31 15h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14z"></svg:path>`,
})
export class BxCartDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
