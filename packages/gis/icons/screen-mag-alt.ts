import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisScreenMagAltIcon],svg[gis-screen-mag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12.5A2.5 2.5 0 0 0 0 15v70a2.5 2.5 0 0 0 2.5 2.5h95A2.5 2.5 0 0 0 100 85V15a2.5 2.5 0 0 0-2.5-2.5zm47.645 15.072a22.36 22.36 0 0 1 15.863 6.59a22.386 22.386 0 0 1 0 31.727a22.384 22.384 0 0 1-31.725 0a22.386 22.386 0 0 1 0-31.727a22.36 22.36 0 0 1 15.862-6.59" color="currentColor"></svg:path>`,
})
export class GisScreenMagAltIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
