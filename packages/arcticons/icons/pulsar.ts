import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPulsarIcon],svg[arcticons-pulsar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.961 23.998l-13.463 7.175v-14.35z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.977 33.829A19.657 19.657 0 0 1 33.829 6.976m7.194 7.195a19.657 19.657 0 0 1-26.852 26.853M33.829 6.977l8.6-4.477m-36.858 43l8.6-4.476"></svg:path>`,
})
export class ArcticonsPulsarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
