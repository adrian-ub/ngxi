import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCropIcon],svg[picon-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2V0h1v2h3v3h2v1H6v2H5V6H2V4h1v1h2V3H0V2"></svg:path>`,
})
export class PiconCropIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
