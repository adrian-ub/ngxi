import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsColorModeIcon],svg[lets-icons-color-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></svg:circle><svg:path fill="currentColor" d="M18.364 5.636A9 9 0 0 0 5.636 18.364L12 12z"></svg:path></svg:g>`,
})
export class LetsIconsColorModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
