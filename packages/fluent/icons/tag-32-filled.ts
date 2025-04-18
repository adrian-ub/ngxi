import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTag32FilledIcon],svg[fluent-tag-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.636 3.952A3.25 3.25 0 0 1 17.934 3h7.818a3.25 3.25 0 0 1 3.25 3.25v7.818a3.25 3.25 0 0 1-.952 2.298l-11.68 11.68a3.25 3.25 0 0 1-4.596 0l-7.818-7.818a3.25 3.25 0 0 1 0-4.596zM23 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class FluentTag32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
