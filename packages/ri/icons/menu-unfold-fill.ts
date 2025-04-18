import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfoldFillIcon],svg[ri-menu-unfold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v2H3v-2zM17 3.5l5 5l-5 5zM12 11v2H3v-2zm0-7v2H3V4z"></svg:path>`,
})
export class RiMenuUnfoldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
