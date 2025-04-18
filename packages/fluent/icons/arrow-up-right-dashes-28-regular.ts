import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes28RegularIcon],svg[fluent-arrow-up-right-dashes-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 15.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-.75-.75h-11.5a.75.75 0 0 0 0 1.5h9.69l-5.22 5.22a.75.75 0 1 0 1.06 1.06l5.22-5.22zM8.78 20.28a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 1 0 1.06 1.06zm7-8.06a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentArrowUpRightDashes28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
