import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlidePlay24FilledIcon],svg[fluent-slide-play-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v6.06A6.5 6.5 0 0 0 11.498 20H4.75A2.75 2.75 0 0 1 2 17.25zM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-7 1.999a.5.5 0 0 0 .777.416l3.002-1.999a.5.5 0 0 0 0-.832l-3.002-2a.5.5 0 0 0-.777.417z"></svg:path>`,
})
export class FluentSlidePlay24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
