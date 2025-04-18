import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorUtkIcon],svg[cryptocurrency-color-utk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#30367a"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M14.353 22.298V9.028H10.5V6h11v3.028h-3.853v13.27zM13.466 26c-1.989 0-2.93-.956-2.93-2.978V9.896h2.894v12.992c0 .32.105.426.419.426h4.339c.314 0 .42-.107.42-.426V9.896H21.5v13.126c0 2.022-.942 2.978-2.93 2.978z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorUtkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
