import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorStormIcon],svg[cryptocurrency-color-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#080d98"></svg:circle><svg:path fill="#fff" d="m23 6l-12.029 8.25l6.076 3.875L9 26l13.302-9.208l-5.994-3.875z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorStormIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
