import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoPersonClock48FilledIcon],svg[fluent-video-person-clock-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12M4 10.75A3.75 3.75 0 0 1 7.75 7h32.5A3.75 3.75 0 0 1 44 10.75v14.87a13 13 0 0 0-2.5-1.88V10.75c0-.69-.56-1.25-1.25-1.25H7.75c-.69 0-1.25.56-1.25 1.25v24.5c0 .69.56 1.25 1.25 1.25H14v-6.25A3.25 3.25 0 0 1 17.25 27h7.502A12.94 12.94 0 0 0 22 35c0 1.396.22 2.74.627 4H7.75A3.75 3.75 0 0 1 4 35.25zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-5 0a1 1 0 0 0-1-1h-4v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentVideoPersonClock48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
