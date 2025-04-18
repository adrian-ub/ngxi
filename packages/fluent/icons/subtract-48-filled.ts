import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtract48FilledIcon],svg[fluent-subtract-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23.5A1.5 1.5 0 0 1 7.5 22h33a1.5 1.5 0 0 1 0 3h-33A1.5 1.5 0 0 1 6 23.5"></svg:path>`,
})
export class FluentSubtract48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
