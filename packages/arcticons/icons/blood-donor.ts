import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBloodDonorIcon],svg[arcticons-blood-donor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.347 29.352c-3.907-1.723-5.02-5.993-5.02-7.977c0-5.106 7.81-15.773 8.601-16.84c.035-.047.094-.047.129 0c.79 1.07 8.615 11.78 8.615 16.84c0 1.544-.953 6.163-4.893 7.977"></svg:path><svg:circle cx="24" cy="35.983" r="7.517" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.448 35.915h9.104m-4.572 4.561v-9.104"></svg:path>`,
})
export class ArcticonsBloodDonorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
