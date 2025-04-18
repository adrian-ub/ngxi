import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotonotificationsIcon],svg[arcticons-motonotifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.2 12.59H15.88L4.5 8.1v28.44a3.32 3.32 0 0 0 3.3 3.32h32.4a3.32 3.32 0 0 0 3.3-3.32V15.89a3.3 3.3 0 0 0-3.3-3.3m-24.89 18a3.12 3.12 0 1 1-3.11-3.13a3.13 3.13 0 0 1 3.11 3.13m0-9a3.12 3.12 0 1 1-3.11-3.13a3.13 3.13 0 0 1 3.11 3.13m2.61 8.93h20.82m-20.82-8.96h20.82"></svg:path>`,
})
export class ArcticonsMotonotificationsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
