import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreVertical32FilledIcon],svg[fluent-more-vertical-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0m0 9a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path>`,
})
export class FluentMoreVertical32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
