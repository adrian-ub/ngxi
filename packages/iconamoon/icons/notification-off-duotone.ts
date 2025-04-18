import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNotificationOffDuotoneIcon],svg[iconamoon-notification-off-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6 10v9h12v-1L6.876 6.876A5.97 5.97 0 0 0 6 10" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 22h2"></svg:path><svg:circle cx="12" cy="3" r="1" stroke="currentColor" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.999 4.342A6 6 0 0 1 18 10v2.343M6 19v-9c0-1.144.32-2.214.876-3.124M6 19h12M6 19H4m14 0v-1m0 1h1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonNotificationOffDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
