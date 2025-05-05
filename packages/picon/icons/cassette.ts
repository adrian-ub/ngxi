import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCassetteIcon],svg[picon-cassette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5L1 7l1-1h4l1 1l-1-1.5M2 3v1h1V3m3 0H5v1h1M0 7V1h8v6M1 5h6V2H1"></svg:path>`,
})
export class PiconCassetteIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
