import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollapseHorizontalLineIcon],svg[ri-collapse-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.5 12l4.95-4.95l1.414 1.415L17.328 11H23v2h-5.672l2.534 2.533l-1.415 1.414zM1 13h5.67l-2.534 2.535l1.414 1.414L10.5 12L5.55 7.05L4.136 8.465L6.672 11H1z"></svg:path>`,
})
export class RiCollapseHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
