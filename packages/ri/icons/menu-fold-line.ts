import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuFoldLineIcon],svg[ri-menu-fold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v2H3v-2zM6.596 3.903L8.01 5.318L4.828 8.5l3.182 3.182l-1.414 1.414L2 8.5zM21 11v2h-9v-2zm0-7v2h-9V4z"></svg:path>`,
})
export class RiMenuFoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
