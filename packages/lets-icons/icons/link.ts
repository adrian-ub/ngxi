import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLinkIcon],svg[lets-icons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16H7a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4h3m6 4H8m6 4h3a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4h-3"></svg:path>`,
})
export class LetsIconsLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
