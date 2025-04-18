import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPollHorizontal20RegularIcon],svg[fluent-poll-horizontal-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4zm1 2a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h12a1 1 0 0 0 1-1M8 2a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4zm1 2a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1m5 12a2 2 0 0 0-2-2H4a2 2 0 1 0 0 4h8a2 2 0 0 0 2-2m-2-1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"></svg:path>`,
})
export class FluentPollHorizontal20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
