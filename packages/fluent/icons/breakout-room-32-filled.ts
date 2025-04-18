import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBreakoutRoom32FilledIcon],svg[fluent-breakout-room-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3A4.5 4.5 0 0 0 3 7.5v6.031A6 6 0 0 1 7.5 11.5h7a6 6 0 0 1 6 6v7c0 1.792-.786 3.4-2.031 4.5H24.5a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM3 17.5A4.5 4.5 0 0 1 7.5 13h7a4.5 4.5 0 0 1 4.5 4.5v7a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 3 24.5z"></svg:path>`,
})
export class FluentBreakoutRoom32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
