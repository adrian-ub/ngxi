import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLinkMultiple20RegularIcon],svg[fluent-link-multiple-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8H9.5a.5.5 0 0 1 0-1H11a3 3 0 1 0 0-6H5a3 3 0 0 0-.872 5.871a5 5 0 0 0-.126 1.003A4 4 0 0 1 1 8m17 4a3 3 0 0 0-2.128-2.871q.113-.487.127-1.003A4.002 4.002 0 0 1 15 16H9a4 4 0 0 1 0-8h1.5a.5.5 0 0 1 0 1H9a3 3 0 1 0 0 6h6a3 3 0 0 0 3-3"></svg:path>`,
})
export class FluentLinkMultiple20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
