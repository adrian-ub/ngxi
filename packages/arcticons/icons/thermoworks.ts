import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThermoworksIcon],svg[arcticons-thermoworks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.608 38.5a15.05 15.05 0 0 0 1.313-6.601c0-7.894-3.842-7.894-3.842-15.788A15.1 15.1 0 0 1 23.395 9.5m8.792 29a15.05 15.05 0 0 0 1.313-6.601c0-7.894-3.842-7.894-3.842-15.787A15.1 15.1 0 0 1 30.974 9.5m-13.945 29a15.05 15.05 0 0 0 1.313-6.601c0-7.894-3.842-7.894-3.842-15.788A15.1 15.1 0 0 1 15.815 9.5"></svg:path>`,
})
export class ArcticonsThermoworksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
