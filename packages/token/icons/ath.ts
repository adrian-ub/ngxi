import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAthIcon],svg[token-ath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.706 21h-2.393L12 5.758L10.687 21H8.294l2.17-18h3.077z"></svg:path>`,
})
export class TokenAthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
