import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDiamondOutlineIcon],svg[mdi-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6L2 8l10 14L22 8zM4.43 8l2.64-4h9.86l2.64 4L12 18.56z"></svg:path>`,
})
export class MdiDiamondOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
