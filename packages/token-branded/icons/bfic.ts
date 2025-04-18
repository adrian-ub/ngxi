import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBficIcon],svg[token-branded-bfic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#F8E000"><svg:path d="M10.42 4.632H6.21v13.157h2.632V7.263h5.789c.321 0 .526.242.526.526v1.58c0 .331-.205.526-.526.526h-3.158v2.631h3.158c.321 0 .526.29.526.527v1.579c0 .263-.3.526-.526.526h-3.158V22h2.632v-4.21h1.752c1.632 0 1.932-1.074 1.932-1.79v-3.474a1.4 1.4 0 0 0-.79-1.315c.548-.285.79-1.106.79-1.58v-2.3c0-2-1.174-2.7-1.932-2.7h-2.805V2h-2.631z"></svg:path><svg:path d="M8.842 19.368H6.21V22h2.632z"></svg:path></svg:g>`,
})
export class TokenBrandedBficIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
