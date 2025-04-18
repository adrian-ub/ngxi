import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfoldLineIcon],svg[ri-menu-unfold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18v2H3v-2zM17.404 3.903L22 8.5l-4.596 4.596l-1.414-1.415L19.172 8.5L15.99 5.318zM12 11v2H3v-2zm0-7v2H3V4z"></svg:path>`,
})
export class RiMenuUnfoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
