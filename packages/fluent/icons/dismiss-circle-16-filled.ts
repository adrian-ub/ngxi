import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismissCircle16FilledIcon],svg[fluent-dismiss-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.354 5.646L8 7.293l1.646-1.647a.5.5 0 0 1 .708.708L8.707 8l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L7.293 8L5.646 6.354a.5.5 0 1 1 .708-.708"></svg:path>`,
})
export class FluentDismissCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
