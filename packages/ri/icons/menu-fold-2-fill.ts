import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuFold2FillIcon],svg[ri-menu-fold-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 3.5l5 5l-5 5zM21 20v-2H3v2zm0-7v-2h-9v2zm0-7V4h-9v2z"></svg:path>`,
})
export class RiMenuFold2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
