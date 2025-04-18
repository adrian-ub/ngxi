import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier1x24FilledIcon],svg[fluent-multiplier-1x-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.902a1 1 0 0 0-1.854-.52l-.073.12c-.403.667-.842 1.394-2.087 2.14a1 1 0 0 0 1.029 1.716A8.5 8.5 0 0 0 8 10.672v5.329a1 1 0 1 0 2 0zm3.707 4.392a1 1 0 1 0-1.414 1.414l.793.793l-.793.793a1 1 0 0 0 1.414 1.414l.793-.793l.793.793a1 1 0 1 0 1.414-1.414l-.793-.793l.793-.793a1 1 0 0 0-1.414-1.414l-.793.793z"></svg:path>`,
})
export class FluentMultiplier1x24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
