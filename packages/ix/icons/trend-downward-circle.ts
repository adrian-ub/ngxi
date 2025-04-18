import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendDownwardCircleIcon],svg[ix-trend-downward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.463 255.869c0 94.257 76.41 170.666 170.667 170.666s170.667-76.409 170.667-170.666c0-90.675-70.712-164.833-160-170.34V42.798c112.865 5.558 202.666 98.827 202.666 213.072c0 117.819-95.512 213.333-213.333 213.333c-117.82 0-213.333-95.514-213.333-213.333c0-51.263 18.08-98.303 48.213-135.09a214.5 214.5 0 0 1 30.108-30.093L320.13 289.699v-97.83h42.667v170.666H192.13v-42.666h97.83L121.306 151.215c-22.464 28.9-35.843 65.215-35.843 104.654" clip-rule="evenodd"></svg:path>`,
})
export class IxTrendDownwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
