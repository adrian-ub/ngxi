import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIntersectSelectionIcon],svg[icon-park-intersect-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="27" height="27" x="16" y="16" rx="2"></svg:rect><svg:rect width="27" height="27" x="5" y="5" rx="2"></svg:rect><svg:path d="M27 16L16 27"></svg:path><svg:path d="M32 21L21 32"></svg:path></svg:g>`,
})
export class IconParkIntersectSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
