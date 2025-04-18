import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAverageIcon],svg[icon-park-outline-average-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 4v40h40"></svg:path><svg:path d="M10 38S15.313 4 27 4s17 34 17 34"></svg:path><svg:path stroke-dasharray="2 6" d="M10 24h34"></svg:path></svg:g>`,
})
export class IconParkOutlineAverageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
