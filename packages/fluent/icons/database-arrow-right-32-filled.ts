import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabaseArrowRight32FilledIcon],svg[fluent-database-arrow-right-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14c3.256 0 6.3-.596 8.606-1.644c.823-.374 1.668-.865 2.394-1.48v4.33a9 9 0 0 0-9.758 14.763q-.612.03-1.242.031c-6.075 0-11-2.239-11-5V10.876c.726.615 1.571 1.106 2.394 1.48C9.7 13.404 12.744 14 16 14M5 7c0-2.761 4.925-5 11-5s11 2.239 11 5s-4.925 5-11 5S5 9.761 5 7m26 16.5a7.5 7.5 0 1 0-15 0a7.5 7.5 0 0 0 15 0m-12.25-1h7.69l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L26.44 24h-7.69a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentDatabaseArrowRight32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
