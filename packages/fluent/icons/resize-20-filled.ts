import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentResize20FilledIcon],svg[fluent-resize-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 3H6a3 3 0 0 0-3 3v.5a.5.5 0 0 0 1 0V6a2 2 0 0 1 2-2h2.5a.5.5 0 0 0 0-1M3 14a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm10.5 3a.5.5 0 0 1 0-1h.5a2 2 0 0 0 2-2v-2.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-3 3zM17 8.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1 0-1H14a3 3 0 0 1 3 3z"></svg:path>`,
})
export class FluentResize20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
