import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBreakoutRoom32RegularIcon],svg[fluent-breakout-room-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-6.031a6 6 0 0 0 1.487-2H24.5a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5v4.544a6 6 0 0 0-2 1.487zM7.5 13A4.5 4.5 0 0 0 3 17.5v7A4.5 4.5 0 0 0 7.5 29h7a4.5 4.5 0 0 0 4.5-4.5v-7a4.5 4.5 0 0 0-4.5-4.5zM5 17.5A2.5 2.5 0 0 1 7.5 15h7a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 5 24.5z"></svg:path>`,
})
export class FluentBreakoutRoom32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
