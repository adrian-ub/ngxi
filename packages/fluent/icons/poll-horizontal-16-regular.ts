import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPollHorizontal16RegularIcon],svg[fluent-poll-horizontal-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8a2 2 0 0 0-2-2H3a2 2 0 1 0 0 4h10a2 2 0 0 0 2-2m-2 1H3a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2M9 3a2 2 0 0 0-2-2H3a2 2 0 1 0 0 4h4a2 2 0 0 0 2-2M3 4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm6 7a2 2 0 1 1 0 4H3a2 2 0 1 1 0-4zm0 3a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2z"></svg:path>`,
})
export class FluentPollHorizontal16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
