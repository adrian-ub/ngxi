import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal416FilledIcon],svg[fluent-line-horizontal-4-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM2 9.75A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75M2.75 12a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentLineHorizontal416FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
