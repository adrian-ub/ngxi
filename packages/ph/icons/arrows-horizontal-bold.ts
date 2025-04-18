import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsHorizontalBoldIcon],svg[ph-arrows-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m240.49 136.49l-32 32a12 12 0 0 1-17-17L203 140H53l11.52 11.51a12 12 0 0 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L53 116h150l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhArrowsHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
