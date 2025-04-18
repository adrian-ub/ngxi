import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableLock20FilledIcon],svg[fluent-table-lock-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 9c.546 0 1.059.146 1.5.401V8h-4v2.341A3 3 0 0 1 15.5 9M11 14c0-.364.097-.706.268-1H8v4h3zm1-2H8V8h4zm-5 0V8H3v4zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-1-4v4H8V3zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3zm6.5 9v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0m1 1v-1a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentTableLock20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
