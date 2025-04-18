import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabaseSearch32FilledIcon],svg[fluent-database-search-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7c0-2.761 4.925-5 11-5s11 2.239 11 5s-4.925 5-11 5S5 9.761 5 7m11 7c3.256 0 6.3-.596 8.606-1.644c.823-.374 1.668-.865 2.394-1.48v5.534a7.5 7.5 0 1 0-5.942 13.032C19.543 29.797 17.823 30 16 30c-6.075 0-11-2.239-11-5V10.876c.726.615 1.571 1.106 2.394 1.48C9.7 13.404 12.744 14 16 14m6 14c1.296 0 2.496-.41 3.477-1.11l3.316 3.317a1 1 0 0 0 1.414-1.414l-3.316-3.316A6 6 0 1 0 22 28m0-2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class FluentDatabaseSearch32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
