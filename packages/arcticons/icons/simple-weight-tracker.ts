import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimpleWeightTrackerIcon],svg[arcticons-simple-weight-tracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.843 5.723c6.894-2.065 18.022 10.709 20.56 17.265c0 0 5.53 12.343 13.97 13.469l.071 5.731s-8.091 4.33-21.563-19.27c-2.83-5.513-8.087-11.155-13.325-11.105z"></svg:path>`,
})
export class ArcticonsSimpleWeightTrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
