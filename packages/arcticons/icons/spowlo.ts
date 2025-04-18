import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpowloIcon],svg[arcticons-spowlo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.86 42.5c-4.34-2.7-7.22-7.51-7.22-13c0-8.45 6.85-15.3 15.3-15.3c4.1 0 7.82 1.6 10.56 4.22"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.43 5.5l6.565 5.668a9.74 9.74 0 0 1 2.865 4.26l2.795 8.283"></svg:path><svg:circle cx="32.44" cy="30.439" r="2.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.986 29.08l1.124-5.746a.51.51 0 0 0-.666-.58l-5.538 1.9a.51.51 0 0 0-.17.867l4.415 3.846a.51.51 0 0 0 .835-.287"></svg:path>`,
})
export class ArcticonsSpowloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
