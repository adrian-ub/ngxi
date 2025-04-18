import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNrcIcon],svg[arcticons-nrc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.38 25.37a3 3 0 0 1-2.94 2.57h0a3 3 0 0 1-3-3V23a3 3 0 0 1 3-3h0a3 3 0 0 1 2.93 2.56M9.35 23a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4.92m-6-7.86v7.88M18.49 23a3 3 0 0 1 3-3h0m-3 .06v7.88m14.69-7.88L38.65 24l-5.47 3.94L34.61 24z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNrcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
