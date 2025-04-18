import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataHistogram16FilledIcon],svg[fluent-data-histogram-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a2 2 0 1 0-4 0v10h4zM5 7H4a2 2 0 0 0-2 2v4.5a.5.5 0 0 0 .5.5H5zm6 7h2.5a.5.5 0 0 0 .5-.5V7a2 2 0 0 0-2-2h-1z"></svg:path>`,
})
export class FluentDataHistogram16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
