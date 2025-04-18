import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCamera16FilledIcon],svg[fluent-camera-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5.276 2.83A1.5 1.5 0 0 1 6.618 2h2.764a1.5 1.5 0 0 1 1.342.83L11.309 4H12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h.691zM11 8a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path>`,
})
export class FluentCamera16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
