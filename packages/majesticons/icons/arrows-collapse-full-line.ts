import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsCollapseFullLineIcon],svg[majesticons-arrows-collapse-full-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15h-4m0 0v4m0-4l4 4M5 9h4m0 0V5m0 4L5 5m14 4h-4m0 0V5m0 4l4-4M5 15h4m0 0v4m0-4l-4 4"></svg:path>`,
})
export class MajesticonsArrowsCollapseFullLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
