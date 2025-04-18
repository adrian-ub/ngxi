import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailbox16FilledIcon],svg[fluent-mailbox-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V6h3.354A4 4 0 0 0 8 9v5c0 .364.097.706.268 1H2a1 1 0 0 1-1-1V9a3 3 0 0 1 3-3v3.5a.5.5 0 0 0 1 0V4H2.5a.5.5 0 0 1-.5-.5zM12 6a3 3 0 0 0-3 3v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a3 3 0 0 0-3-3m-.5 3h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentMailbox16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
