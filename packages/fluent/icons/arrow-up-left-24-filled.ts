import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpLeft24FilledIcon],svg[fluent-arrow-up-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3a1 1 0 1 1 0 2H6.414l14.293 14.293a1 1 0 0 1-1.414 1.414L5 6.414V13a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class FluentArrowUpLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
