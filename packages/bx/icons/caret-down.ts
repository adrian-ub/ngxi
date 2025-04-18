import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCaretDownIcon],svg[bx-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.998 17l7-8h-14z"></svg:path>`,
})
export class BxCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
