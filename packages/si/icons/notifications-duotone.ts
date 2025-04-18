import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNotificationsDuotoneIcon],svg[si-notifications-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6m0 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8 14H4m10 2a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class SiNotificationsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
