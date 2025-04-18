import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsElectricalSensorIcon],svg[flat-color-icons-electrical-sensor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="24" r="9" fill="#B2EBF2"></svg:circle><svg:path fill="#4DD0E1" d="M32 12c-6.6 0-12 5.4-12 12s5.4 12 12 12s12-5.4 12-12s-5.4-12-12-12m0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8"></svg:path><svg:g fill="#3F51B5"><svg:path d="M25.4 22L19.8 5.1l-6.2 22.6l-2.2-5.7H4v4h4.6l5.8 14.3l5.8-21.4l2.4 7.1H30v-4z"></svg:path><svg:circle cx="32" cy="24" r="4"></svg:circle></svg:g>`,
})
export class FlatColorIconsElectricalSensorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
