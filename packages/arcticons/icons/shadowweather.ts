import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShadowweatherIcon],svg[arcticons-shadowweather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M31.222 15.887A10.918 10.918 0 0 0 11.1 23.474a6.998 6.998 0 0 0 .397 13.985h21.167a10.835 10.835 0 1 0-7.65-18.508"></svg:path>`,
})
export class ArcticonsShadowweatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
