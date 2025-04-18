import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal12FilledIcon],svg[fluent-split-horizontal-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 1A1.5 1.5 0 0 1 10 2.5V4H2V2.5A1.5 1.5 0 0 1 3.5 1zm2 4a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM2 7v1.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5V7z"></svg:path>`,
})
export class FluentSplitHorizontal12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
