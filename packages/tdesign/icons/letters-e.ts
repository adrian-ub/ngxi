import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersEIcon],svg[tdesign-letters-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a2 2 0 0 1 2-2h8v2H9v5h8v2H9v5h8v2H9a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignLettersEIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
