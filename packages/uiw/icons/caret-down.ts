import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwCaretDownIcon],svg[uiw-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.704 6.58l-6.972 8.086a.967.967 0 0 1-1.463 0L2.296 6.58C1.76 5.96 1.967 5 2.791 5h14.42c.821 0 1.029.96.493 1.58"></svg:path>`,
})
export class UiwCaretDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
