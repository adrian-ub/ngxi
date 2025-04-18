import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRotateClockwiseAltIcon],svg[carbon-rotate-clockwise-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 16v12h12.001L16 16zm26-1l-1.41-1.41L26 16.17V11a7.01 7.01 0 0 0-7-7h-5v2h5a5.006 5.006 0 0 1 5 5v5.17l-2.59-2.58L20 15l5 5z"></svg:path>`,
})
export class CarbonRotateClockwiseAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
