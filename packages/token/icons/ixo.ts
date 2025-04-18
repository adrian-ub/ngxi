import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenIxoIcon],svg[token-ixo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.385 9.462a1.385 1.385 0 1 0 0-2.77a1.385 1.385 0 0 0 0 2.77m1.384.461H3v7.385h2.77zm.462 1.902V9.923h1.823l1.869 1.856l1.846-1.856h1.846v1.85l-1.837 1.852l1.837 1.827v1.856h-1.869l-1.818-1.81l-1.796 1.81H6.231v-1.819l1.832-1.841zM21 13.615a3.692 3.692 0 1 1-7.384 0a3.692 3.692 0 0 1 7.384 0m-2.308 0a1.385 1.385 0 1 1-2.769 0a1.385 1.385 0 0 1 2.77 0" clip-rule="evenodd"></svg:path>`,
})
export class TokenIxoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
