import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiResizeBothIcon],svg[oi-resize-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l1.66 1.66l-4 4L0 4v4h4L2.34 6.34l4-4L8 4V0z"></svg:path>`,
})
export class OiResizeBothIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
