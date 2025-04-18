import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feItalicIcon],svg[fe-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.97 19l3.75-14H10a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2h-3.208L11.04 19H14a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"></svg:path>`,
})
export class FeItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
