import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCertificate16FilledIcon],svg[fluent-certificate-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h10c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2H6.62A3.97 3.97 0 0 0 8 9a3.97 3.97 0 0 0-1.38-3h4.88a.5.5 0 0 0 0-1H4a3.97 3.97 0 0 0-3 1.38V4c0-1.103.897-2 2-2m6.5 7h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1M4 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-2 2.5v-2.057a3.96 3.96 0 0 0 2 .556c.732 0 1.409-.212 2-.556v2.056a.5.5 0 0 1-.264.441a.5.5 0 0 1-.513-.024L4 14.1l-1.223.815A.497.497 0 0 1 2 14.5"></svg:path>`,
})
export class FluentCertificate16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
