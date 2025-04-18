import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSyncCircle48FilledIcon],svg[fluent-arrow-sync-circle-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24m31-7.75a1.25 1.25 0 1 0-2.5 0v2.48A9.99 9.99 0 0 0 24 14a9.99 9.99 0 0 0-8 3.998a1.25 1.25 0 0 0 2 1.502a7.503 7.503 0 0 1 13.074 2H27.25a1.25 1.25 0 1 0 0 2.5h6.5c.69 0 1.25-.56 1.25-1.25zM14.25 33c.69 0 1.25-.56 1.25-1.25v-2.48A9.99 9.99 0 0 0 24 34a9.99 9.99 0 0 0 8-3.998a1.25 1.25 0 0 0-2-1.502a7.503 7.503 0 0 1-13.074-2h3.824a1.25 1.25 0 1 0 0-2.5h-6.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25"></svg:path>`,
})
export class FluentArrowSyncCircle48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
