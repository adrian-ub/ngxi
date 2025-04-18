import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBowlChopsticks24FilledIcon],svg[fluent-bowl-chopsticks-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.376 2.1a.75.75 0 0 1 1.024.276L11.365 11h2.27L9.1 3.124a.75.75 0 0 1 1.3-.748L15.365 11h5.933c.388 0 .702.315.702.702V12a10 10 0 0 1-.458 3H2.458A10 10 0 0 1 2 12v-.298c0-.387.314-.702.702-.702h6.933L5.1 3.124A.75.75 0 0 1 5.376 2.1M3.067 16.5A10 10 0 0 0 12 22a10 10 0 0 0 8.933-5.5z"></svg:path>`,
})
export class FluentBowlChopsticks24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
