import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataHistogram20RegularIcon],svg[fluent-data-histogram-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v11h4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1M7 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V11a2 2 0 0 1 2-2zm0 7v-6H5a1 1 0 0 0-1 1v5zm6 0h3V8a1 1 0 0 0-1-1h-2z"></svg:path>`,
})
export class FluentDataHistogram20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
