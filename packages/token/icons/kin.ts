import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKinIcon],svg[token-kin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3l7.941 4.5v9l-7.94 4.5l-7.942-4.5v-9z"></svg:path>`,
})
export class TokenKinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
