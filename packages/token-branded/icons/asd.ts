import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAsdIcon],svg[token-branded-asd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#43DCF2" d="M6.805 18.666H2L12.227 8.661a1.43 1.43 0 0 1 1.444-.233c.64.261.545.794.55 1.033v7.928h-1.666V10.7l-6.5 6.3H8.7z"></svg:path><svg:path fill="#fff" d="m19.97 5.617l-5.749 5.828v2.222l6.11-6.111V17h-9.187l-.812-1.667l-3.521 3.333h13.52A1.666 1.666 0 0 0 21.999 17V6.584c.017-.206-.083-.706-.61-1.072c-.529-.367-1.167-.084-1.417.11z"></svg:path></svg:g>`,
})
export class TokenBrandedAsdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
