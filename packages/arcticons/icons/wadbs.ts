import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWadbsIcon],svg[arcticons-wadbs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.401 37.125H14.6m0-26.25h18.8m2.393 24.035v5.456c0 1.736-1.367 3.134-3.066 3.134H15.272c-1.7 0-3.066-1.398-3.066-3.134V34.91m0-21.82V7.634c0-1.737 1.367-3.134 3.066-3.134h17.456c1.698 0 3.066 1.398 3.066 3.134v5.456m-5.95 3.717l7.213 7.194l-7.212 7.192m-11.69 0L10.943 24l7.213-7.193"></svg:path>`,
})
export class ArcticonsWadbsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
