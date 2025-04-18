import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenUnichainIcon],svg[token-unichain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.829A8.83 8.83 0 0 1 12.171 3h-.342v8.829H3v.342A8.83 8.83 0 0 1 11.829 21h.342v-8.829H21z"></svg:path>`,
})
export class TokenUnichainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
