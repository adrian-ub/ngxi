import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorSandIcon],svg[cryptocurrency-color-sand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#04ADEF"></svg:circle><svg:path fill="#FFF" d="M10.75 7.067L9 8.867V16l1.75 1.8h6.935v3.6H14.25v-1.8H9v3.6l1.75 1.8h10.435l1.75-1.8V16l-1.75-1.8H14.25v-3.6h3.5v1.8H23V8.8L21.25 7h-10.5z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorSandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
