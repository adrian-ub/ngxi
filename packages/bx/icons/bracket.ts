import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBracketIcon],svg[bx-bracket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V2H4v20h6v-2H6V4zm4 16v2h6V2h-6v2h4v16z"></svg:path>`,
})
export class BxBracketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
