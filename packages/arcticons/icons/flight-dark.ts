import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlightDarkIcon],svg[arcticons-flight-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.323 43.5c-1.496-13.364 24.575-15.476 23.432-26.41c10.44 17.61-23.26 14.153-23.432 26.41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.323 43.5C1.86 31.302 34.575 15.158 27.44 4.5c19.586 15.043-22.994 25.985-15.117 39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.323 43.5c3.51-6.658 27.137-.619 23.096-12.981c-3.02 9.608-17.693 2.261-23.096 12.981"></svg:path>`,
})
export class ArcticonsFlightDarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
