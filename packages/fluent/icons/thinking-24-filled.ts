import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentThinking24FilledIcon],svg[fluent-thinking-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18a2 2 0 1 1 0 4a2 2 0 0 1 0-4m5.5-3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M12 2a5.414 5.414 0 0 1 5.33 4.47h.082a3.765 3.765 0 1 1 0 7.53H6.588a3.765 3.765 0 1 1 0-7.53h.082A5.414 5.414 0 0 1 12 2"></svg:path>`,
})
export class FluentThinking24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
