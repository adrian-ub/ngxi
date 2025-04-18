import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoPersonClock20RegularIcon],svg[fluent-video-person-clock-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v5.757a5.5 5.5 0 0 0-1-.657V4.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6v-1.5A1.5 1.5 0 0 1 7.5 11h2.757a5.5 5.5 0 0 0-.657 1H7.5a.5.5 0 0 0-.5.5V14h2.022a5.6 5.6 0 0 0 0 1H3.5A1.5 1.5 0 0 1 2 13.5zm17 10a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class FluentVideoPersonClock20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
