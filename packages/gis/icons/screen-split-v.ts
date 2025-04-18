import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisScreenSplitVIcon],svg[gis-screen-split-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12.5A2.5 2.5 0 0 0 0 15v70a2.5 2.5 0 0 0 2.5 2.5h95A2.5 2.5 0 0 0 100 85V15a2.5 2.5 0 0 0-2.5-2.5zm2.5 5h90v65H5Z" color="currentColor"></svg:path><svg:path fill="currentColor" d="M50 20L35.004 34.395h9.869V43H9v4.5h82V43H55.125v-8.605h9.873zM9 52.5V57h35.873v8.604H35L50 80l15-14.396h-9.877V57H91v-4.5z" color="currentColor"></svg:path>`,
})
export class GisScreenSplitVIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
