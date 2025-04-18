import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorAtlasIcon],svg[cryptocurrency-color-atlas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cryptocurrencyColorAtlas0" d="M2.5 4.938L0 0h5z"></svg:path><svg:path id="cryptocurrencyColorAtlas1" d="M8.5 6.498L4.03 15.99c-.148.304-.225.55-.55.55l-2.953.002c-.423 0-.657-.109-.451-.55L7.296.447C7.445.19 7.537 0 7.862 0H9.14c.325 0 .417.19.565.448l7.22 15.544c.206.442-.028.551-.451.551l-2.953-.001c-.325 0-.402-.247-.55-.551z"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#31FAFB" fill-rule="nonzero"></svg:circle><svg:use fill="#FFF" href="#cryptocurrencyColorAtlas0" transform="translate(13.5 21.312)"></svg:use><svg:use fill="#FFF" href="#cryptocurrencyColorAtlas1" transform="translate(7.5 6.25)"></svg:use></svg:g>`,
})
export class CryptocurrencyColorAtlasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
