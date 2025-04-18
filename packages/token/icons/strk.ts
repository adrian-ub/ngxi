import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenStrkIcon],svg[token-strk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.105V3L6.316 13.895H12V21l5.684-10.895z"></svg:path>`,
})
export class TokenStrkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
