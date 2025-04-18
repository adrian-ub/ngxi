import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAccountBalanceOutlineIcon],svg[material-symbols-light-account-balance-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17V9h1v8zm5 0V9h1v8zm-7.961 3v-1h16.923v1zM16.5 17V9h1v8zM3.539 7v-.846L12 2.116l8.462 4.038V7zM6.18 6h11.638zm0 0h11.638L12 3.25z"></svg:path>`,
})
export class MaterialSymbolsLightAccountBalanceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
