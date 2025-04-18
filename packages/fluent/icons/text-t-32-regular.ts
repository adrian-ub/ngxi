import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextT32RegularIcon],svg[fluent-text-t-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6h-7v20h2a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h2V6H8v3a1 1 0 0 1-2 0z"></svg:path>`,
})
export class FluentTextT32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
