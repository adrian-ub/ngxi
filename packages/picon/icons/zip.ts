import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconZipIcon],svg[picon-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2v1h2V2M3 0v1h2V0M4 0v4H3V0m0 5v2h2V5M2 8V4h4v4"></svg:path>`,
})
export class PiconZipIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
