import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce24FilledIcon],svg[fluent-arrow-bounce-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0V9.414l8.043 8.043a1 1 0 0 0 1.414 0l8.25-8.25a1 1 0 0 0-1.414-1.414l-7.543 7.543L5.414 8H10a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentArrowBounce24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
