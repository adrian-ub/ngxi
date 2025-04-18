import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersBIcon],svg[tdesign-letters-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7zm2 2v5h6V6zm6 7H9v5h6z"></svg:path>`,
})
export class TdesignLettersBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
