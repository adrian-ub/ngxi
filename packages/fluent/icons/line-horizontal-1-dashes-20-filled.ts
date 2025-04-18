import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal1Dashes20FilledIcon],svg[fluent-line-horizontal-1-dashes-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9.75A.75.75 0 0 1 2.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 2 9.75m6 0A.75.75 0 0 1 8.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 9.75m6 0a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentLineHorizontal1Dashes20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
