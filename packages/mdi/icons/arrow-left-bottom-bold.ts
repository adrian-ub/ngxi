import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowLeftBottomBoldIcon],svg[mdi-arrow-left-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10.5c0 4.14-3.36 7.5-7.5 7.5H11v4l-7-6l7-6v4h2.5c1.93 0 3.5-1.57 3.5-3.5V3h4z"></svg:path>`,
})
export class MdiArrowLeftBottomBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
