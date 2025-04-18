import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMapDrawIcon],svg[icon-park-twotone-map-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMapDraw0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M17 12L4 6v30l13 6l14-6l13 6V12L31 6z"></svg:path><svg:path d="M31 6v30M17 12v30M10.5 9l6.5 3l14-6l6.5 3m-27 30l6.5 3l14-6l6.5 3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMapDraw0)"></svg:path>`,
})
export class IconParkTwotoneMapDrawIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
