import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuAddFillIcon],svg[ri-menu-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15zm-7 3v2H3v-2zm10-7v2H3v-2zm0-7v2H3V4z"></svg:path>`,
})
export class RiMenuAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
