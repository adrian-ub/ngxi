import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeCartIcon],svg[bytesize-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 6h24l-3 13H9m18 4H10L5 2H2"></svg:path><svg:circle cx="25" cy="27" r="2"></svg:circle><svg:circle cx="12" cy="27" r="2"></svg:circle></svg:g>`,
})
export class BytesizeCartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
