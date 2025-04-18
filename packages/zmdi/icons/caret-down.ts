import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretDownIcon],svg[zmdi-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 139h213L107 245z"></svg:path>`,
})
export class ZmdiCaretDownIcon {
  readonly viewBox = input("0 0 216 384")
  readonly width = input("0.57em")
  readonly height = input("1em")
}
