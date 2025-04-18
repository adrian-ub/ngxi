import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilterOffLineIcon],svg[ri-filter-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.929.515L21.07 14.657l-1.414 1.414l-3.823-3.822l-.834 1.25V22H9v-8.5L4 6H3V4h4.585l-2.07-2.07zM9.585 6H6.404L11 12.894V20h2v-7.106l1.392-2.087zM21 4v2h-1l-1.915 2.872l-1.442-1.443l.953-1.43h-2.383l-2-2z"></svg:path>`,
})
export class RiFilterOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
