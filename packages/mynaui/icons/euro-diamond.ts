import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroDiamondIcon],svg[mynaui-euro-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4c1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4c1.209 0 2.126.267 2.75.866"></svg:path></svg:g>`,
})
export class MynauiEuroDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
