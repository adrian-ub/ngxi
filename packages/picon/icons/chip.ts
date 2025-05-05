import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChipIcon],svg[picon-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l1-1h6l1 1M0 3V2h2v1M0 5V4h2v1M1 7L0 6h8L7 7M3 5V2h5v1H5v2m1 0V4h2v1"></svg:path>`,
})
export class PiconChipIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
