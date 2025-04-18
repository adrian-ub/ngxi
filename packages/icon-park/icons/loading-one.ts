import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLoadingOneIcon],svg[icon-park-loading-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4V8"></svg:path><svg:path d="M34 6.6795L32 10.1436"></svg:path><svg:path d="M41.3203 14L37.8562 16"></svg:path><svg:path d="M44 24H40"></svg:path><svg:path d="M41.3203 34L37.8562 32"></svg:path><svg:path d="M34 41.3205L32 37.8564"></svg:path><svg:path d="M24 44V40"></svg:path><svg:path d="M14 41.3205L16 37.8564"></svg:path><svg:path d="M6.67969 34L10.1438 32"></svg:path><svg:path d="M4 24H8"></svg:path><svg:path d="M6.67969 14L10.1438 16"></svg:path><svg:path d="M14 6.6795L16 10.1436"></svg:path></svg:g>`,
})
export class IconParkLoadingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
