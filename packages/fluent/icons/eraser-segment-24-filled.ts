import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEraserSegment24FilledIcon],svg[fluent-eraser-segment-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.651 2.638a2.25 2.25 0 0 1 3.19.023l4.91 5.008a2.25 2.25 0 0 1-.007 3.158L12.16 19.5h3.954a2.501 2.501 0 1 1 0 1.5H9.848a2.24 2.24 0 0 1-1.69-.642L3.06 15.35a2.25 2.25 0 0 1-.007-3.204zM9.801 19.5a.75.75 0 0 0 .467-.22l1.468-1.483l-6.099-6.1l-1.529 1.515a.75.75 0 0 0 .003 1.068l5.099 5.008c.15.147.345.218.54.214V19.5z"></svg:path>`,
})
export class FluentEraserSegment24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
