import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchiveArrowBack48FilledIcon],svg[fluent-archive-arrow-back-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 8.75a2.5 2.5 0 0 1 2.5-2.5h30.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5zm2 9h31.5v5.145A13 13 0 0 0 35 22c-2.267 0-4.398.58-6.254 1.6q.004-.05.004-.1c0-.69-.56-1.25-1.25-1.25h-7a1.25 1.25 0 1 0 0 2.5h6.503A12.98 12.98 0 0 0 22 35c0 2.472.69 4.782 1.887 6.75H15.5a7.25 7.25 0 0 1-7.25-7.25zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-14.293-3.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L30.414 35H36a4 4 0 0 1 4 4a1 1 0 1 0 2 0a6 6 0 0 0-6-6h-5.586z"></svg:path>`,
})
export class FluentArchiveArrowBack48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
