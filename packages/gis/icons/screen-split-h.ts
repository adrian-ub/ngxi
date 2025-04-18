import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisScreenSplitHIcon],svg[gis-screen-split-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12.5A2.5 2.5 0 0 0 0 15v70a2.5 2.5 0 0 0 2.5 2.5h95A2.5 2.5 0 0 0 100 85V15a2.5 2.5 0 0 0-2.5-2.5zm2.5 5h90v65H5Z" color="currentColor"></svg:path><svg:path fill="currentColor" d="M43 21v23.873h-8.604V35L20 50l14.396 15v-9.877H43V79h4.5V21zm9.5 0v58H57V55.125h8.605v9.873L80 50L65.605 35.004v9.869H57V21z" color="currentColor"></svg:path>`,
})
export class GisScreenSplitHIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
