import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiDoubleChevronStartLtrIcon],svg[ooui-double-chevron-start-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 2l1.3 1.3L3.7 10l6.6 6.7L9 18l-8-8zm8.5 0L19 3.3L12.2 10l6.7 6.7l-1.4 1.3l-8-8z"></svg:path>`,
})
export class OouiDoubleChevronStartLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
