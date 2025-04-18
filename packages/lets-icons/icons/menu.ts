import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMenuIcon],svg[lets-icons-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:rect width="16" height="5" x="4" y="5" rx="1"></svg:rect><svg:rect width="16" height="5" x="4" y="14" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
