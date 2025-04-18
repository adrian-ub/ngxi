import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJdSportsIcon],svg[arcticons-jd-sports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.215 16.455v11.317c0 2.075-1.742 3.773-3.872 3.773h0c-2.13 0-3.873-1.698-3.873-3.773v-1.32m12.798 5.093v-15.09h3.485c3.679 0 6.777 3.018 6.777 6.602v1.886c0 3.584-3.098 6.602-6.777 6.602z"></svg:path>`,
})
export class ArcticonsJdSportsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
