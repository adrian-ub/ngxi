import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal28FilledIcon],svg[fluent-flip-horizontal-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.84 23.543A1 1 0 0 1 25 24h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1.912-.41l9 20a1 1 0 0 1-.072.953M17 7.66V22h6.453zM2.75 24a.75.75 0 0 1-.68-1.065l9.5-20.5A.75.75 0 0 1 13 2.75v20.5a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class FluentFlipHorizontal28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
