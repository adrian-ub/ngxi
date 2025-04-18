import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDevicePulseIcon],svg[arcticons-device-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.342 11.023h23.316M12.342 36.977h23.316"></svg:path><svg:rect width="23.316" height="39" x="12.342" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.793" ry="2.793"></svg:rect><svg:circle cx="24" cy="40.254" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.737" cy="28.968" r="1.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.579" cy="21.742" r="1.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="26.421" cy="28.065" r="1.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.263" cy="19.032" r="1.532" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.601 27.704l3.178-4.658m1.84-.182l2.837 4.015m1.679-.168l3.383-6.343"></svg:path>`,
})
export class ArcticonsDevicePulseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
