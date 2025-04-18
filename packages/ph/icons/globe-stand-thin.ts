import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandThinIcon],svg[ph-globe-stand-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 180a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76m0-144a68 68 0 1 1-68 68a68.07 68.07 0 0 1 68-68m74.89 140.28a4 4 0 0 1-.12 5.65a107.3 107.3 0 0 1-70.77 30V236h28a4 4 0 0 1 0 8h-64a4 4 0 0 1 0-8h28v-24.08A108 108 0 0 1 58.06 29.23a4 4 0 1 1 5.77 5.54a100 100 0 0 0 141.4 141.39a4 4 0 0 1 5.66.12"></svg:path>`,
})
export class PhGlobeStandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
