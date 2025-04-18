import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorXpmIcon],svg[cryptocurrency-color-xpm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#ffd81b"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M24 15.562c0 4.423-3.426 5.927-6.31 5.927v1.153h2.225v1.562h-2.224V26h-3.48v-1.796h-2.127v-1.562h2.123v-1.168c-.923 0-6.207-.219-6.207-6.233V8h3.455v7.518c0 3.139 2.766 3.11 2.766 3.11V8h3.47v10.628s2.854.16 2.854-3.153V8H24z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorXpmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
