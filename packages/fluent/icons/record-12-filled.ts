import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRecord12FilledIcon],svg[fluent-record-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class FluentRecord12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
