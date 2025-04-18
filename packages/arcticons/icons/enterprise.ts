import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEnterpriseIcon],svg[arcticons-enterprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.526 26.806c-1.613 3.509-6.047 5.866-11.032 5.864s-9.416-2.362-11.025-5.871"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.264 26.749c-1.445 2.198-4.484 3.59-7.81 3.578c-3.324-.013-6.344-1.428-7.758-3.637"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.954 22.811c.876-4.704 6.675-8.01 13.008-7.413s10.843 4.873 10.115 9.59l-.413.015H5.021"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.02 22.854c.755-3.01 4.336-5.19 8.505-5.181s7.732 2.207 8.462 5.22l-.487.016H5.02"></svg:path>`,
})
export class ArcticonsEnterpriseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
