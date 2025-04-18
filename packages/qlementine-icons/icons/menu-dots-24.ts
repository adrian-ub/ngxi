import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsMenuDots24Icon],svg[qlementine-icons-menu-dots-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C11 6.209 11 6.139 11 6m0 6c0-.139 0-.209.008-.267a.85.85 0 0 1 .724-.724c.059-.008.128-.008.267-.008s.21 0 .267.008a.85.85 0 0 1 .724.724c.008.058.008.128.008.267s0 .209-.008.267a.85.85 0 0 1-.724.724c-.058.008-.128.008-.267.008s-.209 0-.267-.008a.85.85 0 0 1-.724-.724C11 12.209 11 12.139 11 12m0 5.7c-.008.058-.008.128-.008.267s0 .209.008.267a.85.85 0 0 0 .724.724c.058.008.128.008.267.008s.209 0 .267-.008a.85.85 0 0 0 .724-.724c.008-.058.008-.128.008-.267s0-.209-.008-.267a.85.85 0 0 0-.724-.724c-.058-.008-.128-.008-.267-.008s-.209 0-.267.008A.85.85 0 0 0 11 17.7"></svg:path>`,
})
export class QlementineIconsMenuDots24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
