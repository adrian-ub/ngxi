import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStep20FilledIcon],svg[fluent-step-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a1 1 0 0 0-1 1v4H8a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentStep20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
