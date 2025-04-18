import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapeExclude16FilledIcon],svg[fluent-shape-exclude-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.268A2 2 0 0 0 2 4v5a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-1 .268M11 5v4a2 2 0 0 1-2 2H5V7a2 2 0 0 1 2-2z"></svg:path>`,
})
export class FluentShapeExclude16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
