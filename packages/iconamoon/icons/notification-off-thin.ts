import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNotificationOffThinIcon],svg[iconamoon-notification-off-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 22h2"></svg:path><svg:circle cx="12" cy="3" r="1"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 19v-9c0-1.144.32-2.214.876-3.124M6 19h12M6 19H4m14 0v-1m0 1h1M9.999 4.342A6 6 0 0 1 18 10v2.343"></svg:path><svg:path stroke-linecap="round" d="m4 4l16 16"></svg:path></svg:g>`,
})
export class IconamoonNotificationOffThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
