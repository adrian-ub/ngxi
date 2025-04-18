import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsDiamondOutlineIcon],svg[mdi-cards-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L5 12l7 10l7-10M7.44 12L12 5.5l4.56 6.5L12 18.5"></svg:path>`,
})
export class MdiCardsDiamondOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
