import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreVertical48FilledIcon],svg[fluent-more-vertical-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 16a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0 11.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m-3.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0"></svg:path>`,
})
export class FluentMoreVertical48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
