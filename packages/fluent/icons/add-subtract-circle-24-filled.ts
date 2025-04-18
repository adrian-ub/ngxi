import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddSubtractCircle24FilledIcon],svg[fluent-add-subtract-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 14.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m6.517-15.457A8.5 8.5 0 0 1 6.543 18.517zM6 8.75A.75.75 0 0 1 6.75 8H8V6.75a.75.75 0 0 1 1.5 0V8h1.25a.75.75 0 0 1 0 1.5H9.5v1.25a.75.75 0 0 1-1.5 0V9.5H6.75A.75.75 0 0 1 6 8.75"></svg:path>`,
})
export class FluentAddSubtractCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
