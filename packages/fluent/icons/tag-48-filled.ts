import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTag48FilledIcon],svg[fluent-tag-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.49 7.245A4.25 4.25 0 0 1 26.495 6h11.257a4.25 4.25 0 0 1 4.25 4.25v11.257a4.25 4.25 0 0 1-1.245 3.006l-16.24 16.24a4.25 4.25 0 0 1-6.01 0L7.248 29.495a4.25 4.25 0 0 1 0-6.01zM33.5 17a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class FluentTag48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
