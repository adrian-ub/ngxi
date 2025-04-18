import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapClockIcon],svg[mdi-map-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h1.5v4.25l2.86 1.69l-.75 1.22L15 17zm8 4a7 7 0 0 1-7 7c-3 0-5.6-1.92-6.58-4.6L8 17.9l-5.34 2.07l-.16.03a.5.5 0 0 1-.5-.5V4.38c0-.23.15-.41.36-.48L8 2l6 2.1L19.34 2h.16a.5.5 0 0 1 .5.5v7.75c1.81 1.25 3 3.37 3 5.75M9 16c0-3.17 2.11-5.85 5-6.71V6.11L8 4v11.89l1 .35zm7-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiMapClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
