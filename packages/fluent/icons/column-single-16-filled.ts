import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColumnSingle16FilledIcon],svg[fluent-column-single-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.75C4 2.784 4.784 2 5.75 2h3.5c.477 0 .91.19 1.225.5h.025v.025c.31.316.5.748.5 1.225v8.5A1.75 1.75 0 0 1 9.25 14h-3.5A1.75 1.75 0 0 1 4 12.25zm1 8.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75V6H5z"></svg:path>`,
})
export class FluentColumnSingle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
