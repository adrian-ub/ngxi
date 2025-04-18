import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersPIcon],svg[tdesign-letters-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2H9V20H7zm2 7.5h6V6H9z"></svg:path>`,
})
export class TdesignLettersPIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
