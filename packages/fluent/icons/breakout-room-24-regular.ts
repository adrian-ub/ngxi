import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBreakoutRoom24RegularIcon],svg[fluent-breakout-room-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-3.536c.406-.432.731-.94.953-1.5h2.583a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v2.583a4.8 4.8 0 0 0-1.5.953zM13.49 19.5a3.25 3.25 0 0 1-2.74 1.5h-4.5A3.25 3.25 0 0 1 3 17.75v-4.5A3.247 3.247 0 0 1 6.25 10h4.5A3.25 3.25 0 0 1 14 13.25v4.5c0 .644-.187 1.245-.51 1.75M4.5 13.25v4.5c0 .966.784 1.75 1.75 1.75h4.5a1.75 1.75 0 0 0 1.75-1.75v-4.5a1.75 1.75 0 0 0-1.75-1.75h-4.5a1.75 1.75 0 0 0-1.75 1.75"></svg:path>`,
})
export class FluentBreakoutRoom24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
