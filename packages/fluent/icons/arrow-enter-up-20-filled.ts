import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowEnterUp20FilledIcon],svg[fluent-arrow-enter-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.796 2.236a.75.75 0 0 0-1.092 0l-4 4.25a.75.75 0 1 0 1.092 1.028L7.5 4.641V14.75A3.25 3.25 0 0 0 10.75 18h4.5a.75.75 0 0 0 0-1.5h-4.5A1.75 1.75 0 0 1 9 14.75V4.641l2.704 2.873a.75.75 0 1 0 1.092-1.028z"></svg:path>`,
})
export class FluentArrowEnterUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
