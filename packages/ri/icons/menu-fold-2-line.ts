import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuFold2LineIcon],svg[ri-menu-fold-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.403 3.903L2.99 5.318L6.171 8.5L2.99 11.682l1.414 1.414L9 8.5zM21 20v-2H3v2zm0-7v-2h-9v2zm0-7V4h-9v2z"></svg:path>`,
})
export class RiMenuFold2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
