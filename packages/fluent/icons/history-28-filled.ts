import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory28FilledIcon],svg[fluent-history-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5a8.96 8.96 0 0 0-5.658 2H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1.013V4a1 1 0 0 1 2 0v1.514A10.96 10.96 0 0 1 14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14q0-.555.054-1.099a1 1 0 1 1 1.99.198Q5 13.543 5 14a9 9 0 1 0 9-9m1 3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3z"></svg:path>`,
})
export class FluentHistory28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
