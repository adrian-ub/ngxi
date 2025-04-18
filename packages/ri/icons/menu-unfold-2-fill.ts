import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfold2FillIcon],svg[ri-menu-unfold-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3.5v10l-5-5zM21 20v-2H3v2zm-9-7v-2H3v2zm0-7V4H3v2z"></svg:path>`,
})
export class RiMenuUnfold2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
