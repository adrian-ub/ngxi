import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFacebookPlacesIcon],svg[ps-facebook-places-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M311 116q-1-3-3.5-9.5T304 98q-21-49-61.5-72.5T158 2Q101 2 55 39.5T1 145v19l1 5v7q2 16 10.5 36.5t15.5 33t22.5 38T71 317q29 49 89 145q8-13 55-94q2-3 7.5-12t7.5-14q2-3 6.5-8.5t6.5-8.5q7-13 30.5-49.5T308 214t11-49v-22q0-11-8-27m-152 99q-39 0-54-38q-1-5-1-15v-13q0-25 17-38.5T161 97q25 0 41.5 17t16.5 42t-17.5 42t-42.5 17"></svg:path>`,
})
export class PsFacebookPlacesIcon {
  readonly viewBox = input("0 0 320 488")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
