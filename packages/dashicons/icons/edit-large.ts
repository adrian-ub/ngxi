import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsEditLargeIcon],svg[dashicons-edit-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.4 14.1l1.3 1.3l6.9-6.9l-1.3-1.3zm6.3-7.5l-1.3-1.3l-6.9 6.9l1.4 1.4zm2.1-4.7l3.3 3.3c.6.6.5 1.5 0 2l-9.9 9.9l-6.9 1.4l1.4-6.9q9.3-9.45 9.9-9.9c.6-.4 1.6-.4 2.2.2"></svg:path>`,
})
export class DashiconsEditLargeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
