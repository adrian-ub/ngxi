import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTreeIcon],svg[picon-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8H1V2l1 2h2L2 5v2h2m0 1V6h2v2M4 5V3h2v2M0 2V0h2v2"></svg:path>`,
})
export class PiconTreeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
