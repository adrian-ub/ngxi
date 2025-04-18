import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNotificationOffIcon],svg[tabler-notification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.154 6.187A2 2 0 0 0 5 8v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811-1.151M14 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 3l18 18"></svg:path>`,
})
export class TablerNotificationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
