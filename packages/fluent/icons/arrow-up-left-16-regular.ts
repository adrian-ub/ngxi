import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpLeft16RegularIcon],svg[fluent-arrow-up-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 3a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V3.707l10.147 10.147a.5.5 0 0 0 .707-.708L3.707 3z"></svg:path>`,
})
export class FluentArrowUpLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
