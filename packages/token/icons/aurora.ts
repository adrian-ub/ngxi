import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAuroraIcon],svg[token-aurora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.88 5.676a2.1 2.1 0 0 0-3.768 0L4.424 16.46a2.1 2.1 0 0 0 1.884 3.04h11.377a2.1 2.1 0 0 0 1.792-.995a2.1 2.1 0 0 0 .092-2.047zm-4.842-.54a3.3 3.3 0 0 1 5.916 0L20.65 15.92a3.3 3.3 0 0 1-2.965 4.782H6.309a3.312 3.312 0 0 1-2.964-4.782L9.038 5.142z"></svg:path>`,
})
export class TokenAuroraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
