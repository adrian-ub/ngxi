import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLayout2LineIcon],svg[ri-layout-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 5H5v14h6zm8 8h-6v6h6zm0-8h-6v6h6z"></svg:path>`,
})
export class RiLayout2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
