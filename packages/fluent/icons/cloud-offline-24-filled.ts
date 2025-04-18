import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudOffline24FilledIcon],svg[fluent-cloud-offline-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M4.281 4.225l14.496 14.496a.75.75 0 1 1-1.06 1.06l-3.786-3.785H6.693a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.568-3.68L3.22 5.285a.75.75 0 1 1 1.06-1.06zm7.72-.224c3.168 0 4.965 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.314a3.686 3.686 0 0 1-2.91 3.6L7.931 5.752c.884-1.066 2.25-1.751 4.068-1.751z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentCloudOffline24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
