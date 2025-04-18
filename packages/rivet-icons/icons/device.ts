import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsDeviceIcon],svg[rivet-icons-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M1 0a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5v1H2v2h6V9H2V2h10v4h2V1a1 1 0 0 0-1-1z"></svg:path><svg:path d="M10 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm1 7V9h3v5z"></svg:path></svg:g>`,
})
export class RivetIconsDeviceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
