import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorNioIcon],svg[cryptocurrency-color-nio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#70C9C9"></svg:circle><svg:path fill="#FFF" d="M16 13.764h-4.822L16 5.5l4.822 8.264zm.655 9.736l2.515-4.309l2.411-4.131L26.5 23.5zm-3.825-4.309l2.515 4.309H5.5l4.919-8.44z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorNioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
