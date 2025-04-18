import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiDoubleChevronEndLtrIcon],svg[ooui-double-chevron-end-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2L9.7 3.3l6.6 6.7l-6.6 6.7L11 18l8-8zM2.5 2L1 3.3L7.8 10l-6.7 6.7L2.5 18l8-8z"></svg:path>`,
})
export class OouiDoubleChevronEndLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
