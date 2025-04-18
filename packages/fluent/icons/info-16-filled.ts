import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentInfo16FilledIcon],svg[fluent-info-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 5.25a.749.749 0 1 0 0-1.5a.749.749 0 0 0 0 1.498m.5 1.25a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentInfo16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
