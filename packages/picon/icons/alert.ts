import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAlertIcon],svg[picon-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1H3v4h2M3 6v1h2V6M0 2l2-2h4l2 2v4L6 8H2L0 6"></svg:path>`,
})
export class PiconAlertIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
