import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationOff01Icon],svg[hugeicons-notification-off-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.005 19H4.8C3.781 19 3 18.15 3 17.153c0-.726.342-1.41.922-1.845c1.248-.935 1.163-2.421 1.237-3.817C5.247 9.816 5.931 8.141 7 7m2.5-1.5a6.5 6.5 0 0 1 2.502-.5a6.85 6.85 0 0 1 6.844 6.491c.074 1.396-.01 2.882 1.237 3.817c.54.405.873 1.024.917 1.692"></svg:path><svg:path d="M10.5 3.125C10.5 3.953 11.172 5 12 5s1.5-1.047 1.5-1.875S12.828 2 12 2s-1.5.297-1.5 1.125M15 19a3 3 0 1 1-6 0m13 3L2 2"></svg:path></svg:g>`,
})
export class HugeiconsNotificationOff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
