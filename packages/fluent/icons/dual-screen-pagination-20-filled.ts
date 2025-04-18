import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenPagination20FilledIcon],svg[fluent-dual-screen-pagination-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h-5.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 4h5.5v12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8.5 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentDualScreenPagination20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
