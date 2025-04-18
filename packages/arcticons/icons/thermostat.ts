import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThermostatIcon],svg[arcticons-thermostat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.387 30.864V7.887a3.387 3.387 0 1 0-6.774 0v22.977a6.77 6.77 0 0 0-3.388 5.861a6.775 6.775 0 0 0 13.55 0a6.77 6.77 0 0 0-3.387-5.86M24 14.557v-2.826m0 8.326V17.23m0 8.327V22.73m0 11.256V28.23"></svg:path><svg:circle cx="24" cy="36.725" r="2.74" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsThermostatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
