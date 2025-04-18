import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFullScreenMaximize28FilledIcon],svg[fluent-full-screen-maximize-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h3.5a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v3.5a1 1 0 1 1-2 0zm14.5-2a1 1 0 0 1 1-1H22a3 3 0 0 1 3 3v3.5a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3.5a1 1 0 0 1-1-1M4 17.5a1 1 0 0 1 1 1V22a1 1 0 0 0 1 1h3.5a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-3.5a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1V22a3 3 0 0 1-3 3h-3.5a1 1 0 1 1 0-2H22a1 1 0 0 0 1-1v-3.5a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentFullScreenMaximize28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
