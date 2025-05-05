import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconClimbIcon],svg[picon-climb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l3-1l-1 3m6-3v2L2 8H0V6h2V4h2V2h2V0"></svg:path>`,
})
export class PiconClimbIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
