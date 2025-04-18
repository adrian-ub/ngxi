import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMenuFoldIcon],svg[tdesign-menu-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v2H2zm0 5.57L5.887 12L2 14.43zM7 11h15v2H7zm-5 7h20v2H2z"></svg:path>`,
})
export class TdesignMenuFoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
