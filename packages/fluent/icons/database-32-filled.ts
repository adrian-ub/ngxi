import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDatabase32FilledIcon],svg[fluent-database-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14c3.256 0 6.3-.596 8.606-1.644c.823-.374 1.668-.865 2.394-1.48V25c0 2.761-4.925 5-11 5S5 27.761 5 25V10.876c.726.615 1.571 1.106 2.394 1.48C9.7 13.404 12.744 14 16 14M5 7c0-2.761 4.925-5 11-5s11 2.239 11 5s-4.925 5-11 5S5 9.761 5 7"></svg:path>`,
})
export class FluentDatabase32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
