import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCertificate20FilledIcon],svg[fluent-certificate-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a2 2 0 0 0-2 2v3.671a4.5 4.5 0 1 1 7 5.657V15h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1.5 4a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1zm5.5 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M5.5 15a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m-2.5.242A4.5 4.5 0 0 0 5.5 16c.925 0 1.785-.28 2.5-.758V18a.5.5 0 0 1-.8.4l-1.4-1.05a.5.5 0 0 0-.6 0L3.8 18.4A.5.5 0 0 1 3 18z"></svg:path>`,
})
export class FluentCertificate20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
