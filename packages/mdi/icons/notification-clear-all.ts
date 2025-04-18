import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNotificationClearAllIcon],svg[mdi-notification-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13h14v-2H5m-2 6h14v-2H3m4-8v2h14V7"></svg:path>`,
})
export class MdiNotificationClearAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
