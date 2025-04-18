import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectangleLandscape20FilledIcon],svg[fluent-rectangle-landscape-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"></svg:path>`,
})
export class FluentRectangleLandscape20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
