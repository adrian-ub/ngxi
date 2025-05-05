import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSprayIcon],svg[picon-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3v1h1V3m0-2H5v1h3M7 1H6v2h1M3 1h5v5M1 2V0h2v2M0 8V4l1-1h2l1 1v4"></svg:path>`,
})
export class PiconSprayIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
