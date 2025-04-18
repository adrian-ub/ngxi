import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarHorizontalDescending16RegularIcon],svg[fluent-data-bar-horizontal-descending-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zM2 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m5 12a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4zm-5-2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m9-5a2 2 0 0 1-2 2H3a2 2 0 1 1 0-4h6a2 2 0 0 1 2 2m-1 0a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentDataBarHorizontalDescending16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
