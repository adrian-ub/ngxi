import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAchromaticKwgtIcon],svg[arcticons-achromatic-kwgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M33.43 43.327A21.4 21.4 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24a21.4 21.4 0 0 1-2.174 9.431"></svg:path><svg:circle cx="38.5" cy="38.5" r="7"></svg:circle><svg:path d="M36.654 34.492v8.016m3.692 0v-2.053L38.273 38.5l2.073-1.955v-2.053"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.548 2.778l19.678 7.125M9.005 8.598l36.38 13.173M3.772 16.703l40.44 14.643m-41.59-5.06l29.09 10.534M7.841 38.176l19.5 7.061"></svg:path>`,
})
export class ArcticonsAchromaticKwgtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
