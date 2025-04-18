import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal1Dot20FilledIcon],svg[fluent-line-horizontal-1-dot-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M8 11a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentLineHorizontal1Dot20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
