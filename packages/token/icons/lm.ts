import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLmIcon],svg[token-lm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.421 7.737l2.842 1.421v5.21L4.421 15.79zm15.159.473l-2.843 1.422v5.21l2.842 1.422z"></svg:path><svg:path fill="currentColor" d="M7.263 9.158L4.421 7.737L12.001 3l7.104 4.263l-2.842 1.421L12 6.316zm9.474 5.684l2.842 1.42L11.999 21l-7.104-4.264l2.842-1.42L12 17.684zm-1.421-5.21H8.684L12 11.763z"></svg:path><svg:path fill="currentColor" d="M12 15.79v-4.027l3.316-2.131z"></svg:path>`,
})
export class TokenLmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
