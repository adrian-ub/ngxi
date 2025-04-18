import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal348FilledIcon],svg[fluent-line-horizontal-3-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.997 11.5a1.5 1.5 0 0 1 1.5-1.5h37a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1-1.5-1.5M4 24.5A1.5 1.5 0 0 1 5.5 23h37a1.5 1.5 0 0 1 0 3h-37A1.5 1.5 0 0 1 4 24.5M5.5 36a1.5 1.5 0 0 0 0 3h37a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class FluentLineHorizontal348FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
