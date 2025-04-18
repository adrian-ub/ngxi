import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsStitchesOutlineIcon],svg[healthicons-stitches-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 39.979V44h2v-4.019c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796v-7c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V20.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V11.98c2.424-.095 4.04-.539 5.19-1.152a2 2 0 1 0-1.181-1.645c-.835.39-2.074.713-4.009.796V4h-2v5.976c-1.37-.068-2.346-.276-3.105-.544A7 7 0 0 1 19 9.048V9a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 18a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v7.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 28a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66v6.997c-1.37-.068-2.346-.276-3.105-.544a7 7 0 0 1-.896-.384L19 37a2 2 0 1 0-1.047 1.759c.38.2.8.391 1.277.56c.993.35 2.194.59 3.77.66"></svg:path>`,
})
export class HealthiconsStitchesOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
