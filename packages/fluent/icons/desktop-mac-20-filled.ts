import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopMac20FilledIcon],svg[fluent-desktop-mac-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v1a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1H13a1 1 0 0 1-1-1v-1h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM3 13v-1h14v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m5.732 4A2 2 0 0 0 9 16v-1h2v1c0 .364.097.706.268 1z"></svg:path>`,
})
export class FluentDesktopMac20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
