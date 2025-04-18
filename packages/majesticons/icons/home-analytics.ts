import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsHomeAnalyticsIcon],svg[majesticons-home-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.8 3.65a2 2 0 0 1 2.4 0l7 5.25l-.6.8l.6-.8a2 2 0 0 1 .8 1.6V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 .8-1.6zM13 10a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-4 3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm8 2a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsHomeAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
