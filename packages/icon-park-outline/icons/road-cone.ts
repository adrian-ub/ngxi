import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRoadConeIcon],svg[icon-park-outline-road-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M27 6h-6l-1.25 4.5L18.5 15L16 24l-2.5 9l-1.25 4.5L11 42h26l-1.5-5.4L32 24l-2.5-9l-1.25-4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m37 42l-1.5-5.4L32 24l-2.5-9l-1.25-4.5L27 6h-6l-1.25 4.5L18.5 15L16 24l-2.5 9l-1.25 4.5L11 42m26 0H11zm0 0H6zm0 0h5zm-23.5-9h21M32 24H16m13.5-9h-11m9.75-4.5l7.25 26.1m-23.25.9l7.5-27"></svg:path></svg:g>`,
})
export class IconParkOutlineRoadConeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
