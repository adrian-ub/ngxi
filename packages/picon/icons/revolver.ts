import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRevolverIcon],svg[picon-revolver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 5l1-1V3L0 2h8v1H5v1L3 5v2H0m3-3h1V3H3"></svg:path>`,
})
export class PiconRevolverIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
