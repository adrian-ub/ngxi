import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFullScreenMinimize28FilledIcon],svg[fluent-full-screen-minimize-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2.5a1 1 0 0 1 1 1V7a3 3 0 0 1-3 3H3.5a1 1 0 0 1 0-2H7a1 1 0 0 0 1-1V3.5a1 1 0 0 1 1-1m10 0a1 1 0 0 1 1 1V7a1 1 0 0 0 1 1h3.5a1 1 0 1 1 0 2H21a3 3 0 0 1-3-3V3.5a1 1 0 0 1 1-1M2.5 19a1 1 0 0 1 1-1H7a3 3 0 0 1 3 3v3.5a1 1 0 1 1-2 0V21a1 1 0 0 0-1-1H3.5a1 1 0 0 1-1-1M18 21a3 3 0 0 1 3-3h3.5a1 1 0 1 1 0 2H21a1 1 0 0 0-1 1v3.5a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentFullScreenMinimize28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
