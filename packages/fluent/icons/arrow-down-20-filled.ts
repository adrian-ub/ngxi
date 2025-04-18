import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDown20FilledIcon],svg[fluent-arrow-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.792 11.265a.75.75 0 0 0-1.09-1.03l-4.955 5.239V2.75a.75.75 0 0 0-1.5 0v12.726L4.29 10.235a.75.75 0 0 0-1.09 1.03l6.07 6.418a1 1 0 0 0 .566.3a.75.75 0 0 0 .329-.002a1 1 0 0 0 .558-.298z"></svg:path>`,
})
export class FluentArrowDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
