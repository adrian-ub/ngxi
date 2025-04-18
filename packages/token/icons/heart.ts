import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHeartIcon],svg[token-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.667 12.607c0-3.127-1.934-5.607-5.4-5.607c-1.667 0-2.98.52-3.933 1.487V3h-4v18a55 55 0 0 1 4-1.013v-6.12c0-2.407 1.166-3.534 2.906-3.534c1.7 0 2.427 1.08 2.427 3.107v5.667q2.05-.233 4-.294V12.6z"></svg:path>`,
})
export class TokenHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
