import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFullScreenMaximize28RegularIcon],svg[fluent-full-screen-maximize-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.75A2.75 2.75 0 0 1 5.75 3h3.5a.75.75 0 0 1 0 1.5h-3.5c-.69 0-1.25.56-1.25 1.25v3.5a.75.75 0 0 1-1.5 0zm15-2a.75.75 0 0 1 .75-.75h3.5A2.75 2.75 0 0 1 25 5.75v3.5a.75.75 0 0 1-1.5 0v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5a.75.75 0 0 1-.75-.75M3.75 18a.75.75 0 0 1 .75.75v3.5c0 .69.56 1.25 1.25 1.25h3.5a.75.75 0 0 1 0 1.5h-3.5A2.75 2.75 0 0 1 3 22.25v-3.5a.75.75 0 0 1 .75-.75m20.5 0a.75.75 0 0 1 .75.75v3.5A2.75 2.75 0 0 1 22.25 25h-3.5a.75.75 0 0 1 0-1.5h3.5c.69 0 1.25-.56 1.25-1.25v-3.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class FluentFullScreenMaximize28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
