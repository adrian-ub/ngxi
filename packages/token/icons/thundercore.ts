import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenThundercoreIcon],svg[token-thundercore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.76 11.453a.4.4 0 0 0 .338.612h4.56a.191.191 0 0 1 .162.293l-4.474 7.164a.16.16 0 0 1-.225.05a9.01 9.01 0 0 1 4.592-16.571a.159.159 0 0 1 .137.242zm10.282-6.912a.16.16 0 0 0-.225.048l-4.406 7.059a.192.192 0 0 0 .162.292h4.56a.4.4 0 0 1 .337.612l-5.155 8.255a.125.125 0 0 0 .113.192A9.008 9.008 0 0 0 17.04 4.541z"></svg:path>`,
})
export class TokenThundercoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
