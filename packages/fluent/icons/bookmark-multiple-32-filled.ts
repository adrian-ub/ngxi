import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookmarkMultiple32FilledIcon],svg[fluent-bookmark-multiple-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.309 4H19.5A5.5 5.5 0 0 1 25 9.5v16.66a3.6 3.6 0 0 0 2-3.227V9.5A7.5 7.5 0 0 0 19.5 2h-6.967A3.6 3.6 0 0 0 9.31 4m-.56 2A3.75 3.75 0 0 0 5 9.75V29a1 1 0 0 0 1.591.806l6.945-5.092l7.92 5.126A1 1 0 0 0 23 29V9.75A3.75 3.75 0 0 0 19.25 6z"></svg:path>`,
})
export class FluentBookmarkMultiple32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
