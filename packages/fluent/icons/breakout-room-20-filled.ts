import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBreakoutRoom20FilledIcon],svg[fluent-breakout-room-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.354A4 4 0 0 0 12 14v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-3 1.354zm3 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z"></svg:path>`,
})
export class FluentBreakoutRoom20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
