import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPasswordClock48FilledIcon],svg[fluent-password-clock-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.25A6.25 6.25 0 0 1 10.25 7h27.5A6.25 6.25 0 0 1 44 13.25v11.37A12.96 12.96 0 0 0 35 21a12.94 12.94 0 0 0-6.496 1.737L26.768 21l1.866-1.866a1.25 1.25 0 0 0-1.768-1.768L25 19.232l-1.866-1.866a1.25 1.25 0 0 0-1.768 1.768L23.232 21l-1.866 1.866a1.25 1.25 0 0 0 1.768 1.768L25 22.768l1.444 1.444A12.97 12.97 0 0 0 22.038 35H10.25A6.25 6.25 0 0 1 4 28.75zm8.134 4.116a1.25 1.25 0 0 0-1.768 1.768L12.232 21l-1.866 1.866a1.25 1.25 0 0 0 1.768 1.768L14 22.768l1.866 1.866a1.25 1.25 0 0 0 1.768-1.768L15.768 21l1.866-1.866a1.25 1.25 0 0 0-1.768-1.768L14 19.232zM46 34c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-5 0a1 1 0 0 0-1-1h-4v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentPasswordClock48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
