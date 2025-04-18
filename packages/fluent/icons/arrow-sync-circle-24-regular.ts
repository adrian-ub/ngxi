import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSyncCircle24RegularIcon],svg[fluent-arrow-sync-circle-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5.5 6.25a.75.75 0 0 0-1.5 0V9a5 5 0 0 0-4-2a4.99 4.99 0 0 0-3.81 1.762a.75.75 0 1 0 1.143.972a3.5 3.5 0 0 1 5.83.766H13.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75zM7.25 16.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H8.837a3.5 3.5 0 0 0 5.83.767a.75.75 0 0 1 1.142.972A4.99 4.99 0 0 1 12 17a5 5 0 0 1-4-2v.75a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class FluentArrowSyncCircle24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
