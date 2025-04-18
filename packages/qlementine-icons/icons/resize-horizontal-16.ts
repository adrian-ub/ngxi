import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsResizeHorizontal16Icon],svg[qlementine-icons-resize-horizontal-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.85 5.15a.5.5 0 0 1 0 .707L1.7 8.007h4.79a.5.5 0 0 1 0 1H1.7l2.15 2.15a.5.5 0 0 1-.707.707l-3-3a.5.5 0 0 1 0-.707l3-3a.5.5 0 0 1 .707 0zm8.25 0a.5.5 0 0 0 0 .707l2.15 2.15H9.46a.5.5 0 0 0 0 1h4.79l-2.15 2.15a.5.5 0 0 0 .707.707l3-3a.5.5 0 0 0 0-.707l-3-3a.5.5 0 0 0-.707 0z"></svg:path>`,
})
export class QlementineIconsResizeHorizontal16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
