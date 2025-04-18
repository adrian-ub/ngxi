import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEvStationIcon],svg[iconoir-ev-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 5v4"></svg:path><svg:path d="M5 19V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M5 10V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.167 11L9.5 14h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirEvStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
