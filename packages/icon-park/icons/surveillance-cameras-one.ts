import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSurveillanceCamerasOneIcon],svg[icon-park-surveillance-cameras-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 26V42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 33H13L17 27"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 20L33.4735 37.649C33.795 37.8633 34.2113 37.8732 34.5426 37.6744L44 32"></svg:path><svg:path fill="#2F88FF" d="M7.07802 12.7187C6.53287 12.3553 6.47866 11.5745 6.96836 11.1392L14.4279 4.50855C14.7655 4.20844 15.2624 4.17194 15.6403 4.4195L42.7046 22.1513C43.312 22.5493 43.3061 23.4416 42.6935 23.8314L33.5496 29.6503C33.2155 29.8629 32.7875 29.8583 32.458 29.6387L7.07802 12.7187Z"></svg:path></svg:g>`,
})
export class IconParkSurveillanceCamerasOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
