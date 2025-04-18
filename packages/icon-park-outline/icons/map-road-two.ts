import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMapRoadTwoIcon],svg[icon-park-outline-map-road-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10 22l28-10"></svg:path><svg:path stroke-dasharray="2 6" d="m10 29l28-10"></svg:path><svg:path d="m10 36l28-10m-22-7l-3-8m24 25l-3-8"></svg:path></svg:g>`,
})
export class IconParkOutlineMapRoadTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
