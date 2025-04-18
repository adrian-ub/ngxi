import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarHorizontalDescending16FilledIcon],svg[fluent-data-bar-horizontal-descending-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zM7 15a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zm4-7a2 2 0 0 1-2 2H3a2 2 0 1 1 0-4h6a2 2 0 0 1 2 2"></svg:path>`,
})
export class FluentDataBarHorizontalDescending16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
