import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColumnSingleCompare20RegularIcon],svg[fluent-column-single-compare-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v2h10V4a1 1 0 0 0-1-1zm-1 8h10V7H5zm0 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2z"></svg:path>`,
})
export class FluentColumnSingleCompare20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
