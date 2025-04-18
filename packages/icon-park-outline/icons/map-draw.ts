import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMapDrawIcon],svg[icon-park-outline-map-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 12L4 6v30l13 6l14-6l13 6V12L31 6zm14-6v30M17 12v30"></svg:path><svg:path d="m10.5 9l6.5 3l14-6l6.5 3m-27 30l6.5 3l14-6l6.5 3"></svg:path></svg:g>`,
})
export class IconParkOutlineMapDrawIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
