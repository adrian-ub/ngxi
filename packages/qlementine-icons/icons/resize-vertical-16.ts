import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsResizeVertical16Icon],svg[qlementine-icons-resize-vertical-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.9 3.85a.5.5 0 0 1-.707 0L8.043 1.7v4.79a.5.5 0 0 1-1 0V1.7l-2.15 2.15a.5.5 0 0 1-.707-.707l3-3a.5.5 0 0 1 .707 0l3 3a.5.5 0 0 1 0 .707zm0 8.25a.5.5 0 0 0-.707 0l-2.15 2.15V9.46a.5.5 0 0 0-1 0v4.79l-2.15-2.15a.5.5 0 0 0-.707.707l3 3a.5.5 0 0 0 .707 0l3-3a.5.5 0 0 0 0-.707z"></svg:path>`,
})
export class QlementineIconsResizeVertical16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
