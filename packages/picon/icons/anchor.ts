import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAnchorIcon],svg[picon-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8Q0 8 0 4h2L1 5q0 2 2 2V3Q1 1 4 0q3 1 1 3v4q2 0 2-2L6 4h2q0 4-3 4M3 1v1h2V1"></svg:path>`,
})
export class PiconAnchorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
