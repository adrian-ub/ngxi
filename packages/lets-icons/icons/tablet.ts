import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTabletIcon],svg[lets-icons-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="18" x="5" y="3" rx="2"></svg:rect><svg:path d="M15 17H9"></svg:path></svg:g>`,
})
export class LetsIconsTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
