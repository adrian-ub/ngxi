import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHeightIcon],svg[picon-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V3H1l3-3l3 3H5v2h2L4 8L1 5"></svg:path>`,
})
export class PiconHeightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
