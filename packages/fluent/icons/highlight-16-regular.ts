import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHighlight16RegularIcon],svg[fluent-highlight-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 1a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h9.002a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 1 0v3a1.5 1.5 0 0 1-1.001 1.415V7a2 2 0 0 1-2 2H11l.003 1.74a1.5 1.5 0 0 1-.69 1.265l-4.54 2.916a.5.5 0 0 1-.77-.421V9H5a2 2 0 0 1-2-2V5.915A1.5 1.5 0 0 1 2 4.5v-3a.5.5 0 0 1 .5-.5m3.503 8v4.585l3.77-2.422a.5.5 0 0 0 .23-.421L10 9zM4 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6H4z"></svg:path>`,
})
export class FluentHighlight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
