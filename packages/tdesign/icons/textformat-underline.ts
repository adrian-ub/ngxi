import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatUnderlineIcon],svg[tdesign-textformat-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v9a6 6 0 0 1-12 0V3h2v9a4 4 0 0 0 8 0V3zM4 20h16v2H4z"></svg:path>`,
})
export class TdesignTextformatUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
