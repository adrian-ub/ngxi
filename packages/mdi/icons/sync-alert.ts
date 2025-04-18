import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSyncAlertIcon],svg[mdi-sync-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h2V7h-2m10-3h-6v6l2.24-2.24A6 6 0 0 1 19 12a5.99 5.99 0 0 1-4 5.65v2.09c3.45-.89 6-4.01 6-7.74c0-2.21-.91-4.2-2.36-5.64M11 17h2v-2h-2m-8-3c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24A6 6 0 0 1 5 12a5.99 5.99 0 0 1 4-5.65V4.26C5.55 5.15 3 8.27 3 12"></svg:path>`,
})
export class MdiSyncAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
