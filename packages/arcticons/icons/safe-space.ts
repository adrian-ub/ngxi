import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSafeSpaceIcon],svg[arcticons-safe-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="16.957" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="4.771" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="43.229" r=".75" fill="currentColor"></svg:circle><svg:circle cx="43.229" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="4.771" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.386" cy="7.347" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.614" cy="40.653" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.614" cy="7.347" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.386" cy="40.653" r=".75" fill="currentColor"></svg:circle><svg:circle cx="7.347" cy="14.386" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40.653" cy="33.614" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40.653" cy="14.386" r=".75" fill="currentColor"></svg:circle><svg:circle cx="7.347" cy="33.614" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="24" r="6.511" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 36.59v-6.08m0-13.02v-6.08m10.903 18.885l-5.265-3.04m-11.276-6.51l-5.265-3.04m0 12.59l5.265-3.04m11.276-6.51l5.265-3.04"></svg:path>`,
})
export class ArcticonsSafeSpaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
