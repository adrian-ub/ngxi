import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignHorizontalCenterLineIcon],svg[majesticons-align-horizontal-center-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 1 0 0 4h6m0-4h6a2 2 0 1 1 0 4h-6m0-4V3m0 7v4m0 0H9a2 2 0 1 0 0 4h3m0-4h3a2 2 0 1 1 0 4h-3m0 0v3"></svg:path>`,
})
export class MajesticonsAlignHorizontalCenterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
