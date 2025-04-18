import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenStfxIcon],svg[token-stfx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4.969l9 14.062H3z"></svg:path>`,
})
export class TokenStfxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
