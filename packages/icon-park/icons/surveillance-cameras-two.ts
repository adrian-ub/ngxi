import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSurveillanceCamerasTwoIcon],svg[icon-park-surveillance-cameras-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19.0059 26.2759V37.0001H5"></svg:path><svg:path d="M42.6205 21.2152L38.7568 20.1799L34.7544 27.3897L40.55 28.9426L42.6205 21.2152Z"></svg:path><svg:path fill="#2F88FF" d="M38.7566 20.18L34.7542 27.3898L33.0118 30.0287L5 22.523L8.62347 9L40.499 17.541L38.7566 20.18Z"></svg:path></svg:g>`,
})
export class IconParkSurveillanceCamerasTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
