import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAzeroIcon],svg[token-branded-azero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1D242C" fill-rule="evenodd" d="M10.392 3.424L7.364 10.5H3.203a.204.204 0 0 0-.203.205v1.99c0 .113.09.205.203.205h3.135l-3.214 7.51c-.059.137.04.29.185.29h2.447c.082 0 .155-.05.187-.126l6.03-14.601l5.948 14.6a.2.2 0 0 0 .187.127h2.583a.206.206 0 0 0 .186-.289l-3.19-7.51h3.11a.204.204 0 0 0 .203-.206v-1.99a.204.204 0 0 0-.202-.205h-4.13l-3.006-7.075a.2.2 0 0 0-.186-.125h-2.898a.2.2 0 0 0-.186.124" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedAzeroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
