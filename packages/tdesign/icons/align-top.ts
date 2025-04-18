import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAlignTopIcon],svg[tdesign-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm9 2.586l-.707.707l-4 4l-.707.707L8 12.414l.707-.707L11 9.414V21h2V9.414l2.293 2.293l.707.707L17.414 11l-.707-.707l-4-4z"></svg:path>`,
})
export class TdesignAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
