import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPentagonRightIcon],svg[gg-pentagon-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 12L6 7h10l2 5l-2 5H6zm.954 3l1.2-3l-1.2-3h5.692l1.2 3l-1.2 3z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
