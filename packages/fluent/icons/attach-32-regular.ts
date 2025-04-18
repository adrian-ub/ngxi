import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAttach32RegularIcon],svg[fluent-attach-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.223 4.364a8.071 8.071 0 1 1 11.414 11.414l-12.79 12.79a4.89 4.89 0 0 1-6.914-6.915l11.36-11.36a1 1 0 0 1 1.414 1.414l-11.36 11.36a2.89 2.89 0 0 0 4.086 4.086l12.79-12.79a6.071 6.071 0 1 0-8.586-8.585l-13.93 13.93a1 1 0 1 1-1.414-1.414z"></svg:path>`,
})
export class FluentAttach32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
