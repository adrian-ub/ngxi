import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMeatballsMenuIcon],svg[lets-icons-meatballs-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:circle cx="12" cy="12" r="1"></svg:circle><svg:circle cx="6" cy="12" r="1"></svg:circle><svg:circle cx="18" cy="12" r="1"></svg:circle></svg:g>`,
})
export class LetsIconsMeatballsMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
