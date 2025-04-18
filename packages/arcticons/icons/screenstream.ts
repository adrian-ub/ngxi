import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScreenstreamIcon],svg[arcticons-screenstream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26.094" cy="24" r="3.74" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.024 17.97a9.18 9.18 0 0 1-.035 12.099m3.933-16.689a15.16 15.16 0 0 1 .03 21.21m-9.256-17.744V9.485A3.987 3.987 0 0 0 23.713 5.5H10.72a3.986 3.986 0 0 0-3.984 3.985v29.03A3.986 3.986 0 0 0 10.72 42.5h12.992a3.987 3.987 0 0 0 3.983-3.985V31.33M6.737 37.062h20.96M6.737 10.959h20.96"></svg:path>`,
})
export class ArcticonsScreenstreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
