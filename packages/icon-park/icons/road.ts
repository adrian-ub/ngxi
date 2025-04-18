import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadIcon],svg[icon-park-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 6L6 42"></svg:path><svg:path d="M37 6L41.9644 41.9552"></svg:path><svg:path d="M24 6V12"></svg:path><svg:path d="M24 35V42"></svg:path><svg:path d="M24 20V27"></svg:path></svg:g>`,
})
export class IconParkRoadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
