import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceBlocked20RegularIcon],svg[fluent-presence-blocked-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10s10-4.477 10-10m-2 0a8 8 0 0 1-12.906 6.32L16.32 5.094A7.97 7.97 0 0 1 18 10m-3.094-6.32L3.68 14.906A8 8 0 0 1 14.906 3.68"></svg:path>`,
})
export class FluentPresenceBlocked20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
