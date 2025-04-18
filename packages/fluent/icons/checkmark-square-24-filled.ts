import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkSquare24FilledIcon],svg[fluent-checkmark-square-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm10.03 6.78l-5 5a.75.75 0 0 1-1.06 0l-2.004-2.004a.75.75 0 1 1 1.06-1.06l1.474 1.473l4.47-4.47a.75.75 0 1 1 1.06 1.061"></svg:path>`,
})
export class FluentCheckmarkSquare24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
