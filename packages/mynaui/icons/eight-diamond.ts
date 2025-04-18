import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEightDiamondIcon],svg[mynaui-eight-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12s2.5.5 2.5 2s-1.12 2-2.5 2s-2.5-.5-2.5-2s2.5-2 2.5-2m0 0s2.5-.5 2.5-2s-1.12-2-2.5-2s-2.5.5-2.5 2s2.5 2 2.5 2"></svg:path><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path></svg:g>`,
})
export class MynauiEightDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
