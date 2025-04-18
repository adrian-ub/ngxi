import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHaremAltinIcon],svg[arcticons-harem-altin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.754 34.25v-20.5L24 3.5L6.247 13.75v20.5L24 44.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.163 29.29V18.71L24 13.42l-9.163 5.29v10.58L24 34.58zM24 3.5v9.92m9.163 5.29l8.591-4.96m-8.591 15.54l8.591 4.96M24 34.58v9.92M6.247 34.25l8.59-4.96m0-10.58l-8.264-5.148"></svg:path>`,
})
export class ArcticonsHaremAltinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
