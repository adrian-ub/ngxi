import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTriangleDownIcon],svg[zmdi-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 306L350 87H77zm0 80L0 45h427z"></svg:path>`,
})
export class ZmdiTriangleDownIcon {
  readonly viewBox = input("0 0 432 392")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
