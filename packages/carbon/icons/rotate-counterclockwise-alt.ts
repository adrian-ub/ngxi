import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRotateCounterclockwiseAltIcon],svg[carbon-rotate-counterclockwise-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 28V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2m2-12l-.001 12H28V16zM2 15l1.41-1.41L6 16.17V11a7.01 7.01 0 0 1 7-7h5v2h-5a5.006 5.006 0 0 0-5 5v5.17l2.59-2.58L12 15l-5 5z"></svg:path>`,
})
export class CarbonRotateCounterclockwiseAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
