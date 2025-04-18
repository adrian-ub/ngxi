import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableLock16FilledIcon],svg[fluent-table-lock-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2H5v3H2zM6 5V2h4v3zM2 6h3v4H2zm4 0v4h1a2 2 0 0 1 1.5-1.937V8c0-.768.289-1.47.764-2zm1 5v3H6v-3zm-5 0h3v3h-.5A2.5 2.5 0 0 1 2 11.5zm12-6.5V5h-3V2h.5A2.5 2.5 0 0 1 14 4.5M9.5 8v1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V8a2 2 0 1 0-4 0m1 1V8a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentTableLock16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
