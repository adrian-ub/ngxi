import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencySandIcon],svg[cryptocurrency-sand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16S7.163 0 16 0m5.25 7h-10.5v.067L9 8.867V16l1.75 1.8h6.935v3.6H14.25v-1.8H9v3.6l1.75 1.8h10.435l1.75-1.8V16l-1.75-1.8H14.25v-3.6h3.5v1.8H23V8.8z"></svg:path>`,
})
export class CryptocurrencySandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
