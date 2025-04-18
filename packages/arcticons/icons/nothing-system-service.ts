import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingSystemServiceIcon],svg[arcticons-nothing-system-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="18" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14" cy="21" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18" cy="18" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20" cy="18" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16" cy="30" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18" cy="30" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20" cy="30" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26" cy="30" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28" cy="30" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30" cy="30" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32" cy="30" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22" cy="21" r=".75" fill="currentColor"></svg:circle><svg:circle cx="26" cy="21" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14" cy="27" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22" cy="27" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34" cy="27" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28" cy="18" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30" cy="18" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32" cy="18" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34" cy="18" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.23 26q.13-.995.14-2a17 17 0 0 0-.14-2l4.33-3.39a1 1 0 0 0 .25-1.31l-4.1-7.11a1 1 0 0 0-1.25-.44l-5.11 2.06a15.7 15.7 0 0 0-3.46-2l-.77-5.43a1 1 0 0 0-1-.86H19.9a1 1 0 0 0-1 .86l-.77 5.43a15.4 15.4 0 0 0-3.46 2L9.54 9.75a1 1 0 0 0-1.25.44l-4.1 7.11a1 1 0 0 0 .25 1.31L8.76 22a17 17 0 0 0-.14 2q.01 1.005.14 2l-4.32 3.39a1 1 0 0 0-.25 1.31l4.1 7.11a1 1 0 0 0 1.25.44l5.11-2.06a15.7 15.7 0 0 0 3.46 2l.77 5.43a1 1 0 0 0 1 .86h8.2a1 1 0 0 0 1-.86l.77-5.43a15.4 15.4 0 0 0 3.46-2l5.11 2.06a1 1 0 0 0 1.25-.44l4.1-7.11a1 1 0 0 0-.25-1.31z"></svg:path>`,
})
export class ArcticonsNothingSystemServiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
