import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faLocationArrowIcon],svg[fa-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1401 93L761 1373q-17 35-57 35q-5 0-15-2q-22-5-35.5-22.5T640 1344V768H64q-22 0-39.5-13.5T2 719t4-42t29-30L1315 7q13-7 29-7q27 0 45 19q15 14 18.5 34.5T1401 93"></svg:path>`,
})
export class FaLocationArrowIcon {
  readonly viewBox = input("0 0 1408 1408")
  readonly width = input("1em")
  readonly height = input("1em")
}
