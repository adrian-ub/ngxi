import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRewindMiniLineIcon],svg[ri-rewind-mini-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9.86L5.968 12L9 14.14zm1.909 7.463a.5.5 0 0 1-.697.12l-7.133-5.035a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.091.288M18 14.14V9.86L14.968 12zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"></svg:path>`,
})
export class RiRewindMiniLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
