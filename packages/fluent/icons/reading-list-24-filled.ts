import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReadingList24FilledIcon],svg[fluent-reading-list-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18a1 1 0 0 1 .117 1.993L20 20H7a1 1 0 0 1-.117-1.993L7 18zm-3-3a1 1 0 0 1 .117 1.993L17 17H4a1 1 0 0 1-.117-1.993L4 15zm3-3a1 1 0 0 1 .117 1.993L20 14H7a1 1 0 0 1-.117-1.993L7 12zM6 5a3 3 0 0 1 2.78 1.873a1 1 0 0 1-1.803.857l-.05-.105A1 1 0 1 0 6 9h11.5a1 1 0 0 1 .117 1.993L17.5 11H6a3 3 0 0 1 0-6m14 1a1 1 0 0 1 .117 1.993L20 8h-9a1 1 0 0 1-.117-1.993L11 6z"></svg:path>`,
})
export class FluentReadingList24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
