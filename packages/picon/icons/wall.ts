import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWallIcon],svg[picon-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3H2v2h1m3 1H5v2h1m0-8H5v2h1M0 2v1h8V2M0 5v1h8V5M0 8V0h8v8"></svg:path>`,
})
export class PiconWallIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
