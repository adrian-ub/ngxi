import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPreviousLtrIcon],svg[ooui-previous-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"></svg:path>`,
})
export class OouiPreviousLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
