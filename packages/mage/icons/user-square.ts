import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageUserSquareIcon],svg[mage-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6.022 20.504c.284-1.394.974-2.138 2.076-3.038a6.17 6.17 0 0 1 7.805 0c1.101.9 1.882 1.644 2.165 3.038M12 13.028a3.31 3.31 0 1 0 0-6.619a3.31 3.31 0 0 0 0 6.619"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageUserSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
