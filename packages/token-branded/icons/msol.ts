import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMsolIcon],svg[token-branded-msol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#308D8A" fill-rule="evenodd" d="M6.177 5.647H21l-3.706 3.177H3.001zm.001 9.53h14.293l-3.165 3.176H3zm11.116-4.765L3 10.415l3.178 3.173h14.293z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedMsolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
