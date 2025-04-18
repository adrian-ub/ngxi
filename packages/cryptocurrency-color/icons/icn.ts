import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorIcnIcon],svg[cryptocurrency-color-icn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#4C6F8C"></svg:circle><svg:path fill="#FFF" fill-rule="nonzero" d="M20.833 7H23.5v18h-2.667zm-4.444 9h2.667v9h-2.667zm-4.445-4.5h2.667V25h-2.667zm-4.444 9h2.667V25H7.5z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorIcnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
