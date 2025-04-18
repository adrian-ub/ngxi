import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorSklIcon],svg[cryptocurrency-color-skl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#000"></svg:circle><svg:g fill="#FFF"><svg:path d="M22.514 8.492v.991H9.81v13.034h12.704V24.5l-7.42-.057l-7.45-.085l-.086-8.443L7.5 7.5h15.014z"></svg:path><svg:path d="M23.698 10.9c1.126.312 2.108 1.19 2.425 2.182c.173.595.087.651-.924.651c-.78 0-1.212-.17-1.472-.566c-.433-.709-2.397-.794-2.974-.114c-.635.765.058 1.332 2.31 1.842c1.126.255 2.31.68 2.627.963c1.444 1.275.866 4.08-1.01 4.845c-1.27.51-3.35.51-4.62 0c-.866-.368-1.877-1.643-1.877-2.436c0-.51 1.877-.312 2.368.283c1.04 1.162 3.464.992 3.638-.255c.144-.963-.405-1.388-2.05-1.587c-2.685-.368-3.667-1.19-3.667-3.06c0-2.21 2.425-3.513 5.226-2.748"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorSklIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
