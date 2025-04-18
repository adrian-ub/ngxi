import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandHorizontalLineIcon],svg[ri-expand-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.5 12l4.95-4.95l1.414 1.415L4.328 11H10v2H4.328l2.533 2.533l-1.414 1.414zM14 13h5.67l-2.534 2.535l1.414 1.414L23.5 12l-4.95-4.95l-1.414 1.415L19.672 11H14z"></svg:path>`,
})
export class RiExpandHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
