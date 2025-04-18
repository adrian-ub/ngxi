import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretUp20RegularIcon],svg[fluent-caret-up-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.019 12.28a1 1 0 0 0 .778 1.628h8.407a1 1 0 0 0 .778-1.628l-3.815-4.723a1.5 1.5 0 0 0-2.334 0zm9.185.628H5.797L9.61 8.186a.5.5 0 0 1 .778 0z"></svg:path>`,
})
export class FluentCaretUp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
