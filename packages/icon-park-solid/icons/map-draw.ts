import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMapDrawIcon],svg[icon-park-solid-map-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMapDraw0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M17 12L4 6v30l13 6l14-6l13 6V12L31 6z"></svg:path><svg:path stroke="#000" d="M31 6v30M17 12v30"></svg:path><svg:path stroke="#fff" d="m10.5 9l6.5 3l14-6l6.5 3m-27 30l6.5 3l14-6l6.5 3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMapDraw0)"></svg:path>`,
})
export class IconParkSolidMapDrawIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
