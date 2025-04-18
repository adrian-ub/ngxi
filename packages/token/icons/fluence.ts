import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenFluenceIcon],svg[token-fluence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.35 3h1.368v3.02a6.024 6.024 0 0 1 0 11.96V21h-1.369v-3.011a6.024 6.024 0 0 1 0-11.977zm0 4.392a4.655 4.655 0 0 0 0 9.217zm1.368 9.207a4.655 4.655 0 0 0 0-9.197z" clip-rule="evenodd"></svg:path>`,
})
export class TokenFluenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
