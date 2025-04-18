import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataHistogram16RegularIcon],svg[fluent-data-histogram-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 4v9h3V4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m-1 3V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1H12a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V9a2 2 0 0 1 2-2zm0 6V8H4a1 1 0 0 0-1 1v4zm5 0H13V7a1 1 0 0 0-1-1h-1.5z"></svg:path>`,
})
export class FluentDataHistogram16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
