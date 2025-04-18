import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBadge20RegularIcon],svg[fluent-badge-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m1 9V6.83c-.313.11-.65.17-1 .17v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8c0-.35.06-.687.17-1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></svg:path>`,
})
export class FluentBadge20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
