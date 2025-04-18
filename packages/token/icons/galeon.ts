import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGaleonIcon],svg[token-galeon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 12c0 2.568-1.8 5.61-4.2 6.402V19.8h6.6l1.2-3h-1.2c-.3.6-1.08 1.8-1.8 1.8h-1.842a7.801 7.801 0 1 0-8.316 0H6c-.72 0-1.5-1.2-1.8-1.8H3l1.2 3h6.6v-1.398C8.4 17.61 6.6 14.568 6.6 12c0-2.982 2.418-6.6 5.4-6.6s5.4 3.618 5.4 6.6"></svg:path>`,
})
export class TokenGaleonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
