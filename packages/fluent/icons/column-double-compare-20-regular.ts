import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColumnDoubleCompare20RegularIcon],svg[fluent-column-double-compare-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M3 4h4a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1m4 12H3a1 1 0 0 1-1-1V7h6v8a1 1 0 0 1-1 1M17 3h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 1h4a1 1 0 0 1 1 1v5h-6V5a1 1 0 0 1 1-1m4 12h-4a1 1 0 0 1-1-1v-2h6v2a1 1 0 0 1-1 1"></svg:path>`,
})
export class FluentColumnDoubleCompare20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
