import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon16FilledIcon],svg[fluent-hexagon-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 2a1.5 1.5 0 0 0-1.3.75l-2.599 4.5a1.5 1.5 0 0 0 0 1.5l2.6 4.5a1.5 1.5 0 0 0 1.298.75h5.2a1.5 1.5 0 0 0 1.3-.75l2.599-4.5a1.5 1.5 0 0 0 0-1.5l-2.6-4.5A1.5 1.5 0 0 0 10.6 2z"></svg:path>`,
})
export class FluentHexagon16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
