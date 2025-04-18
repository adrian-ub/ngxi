import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStatIcon],svg[lets-icons-stat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:rect width="4" height="13" x="18" y="7" rx="1"></svg:rect><svg:rect width="4" height="7" x="10" y="13" rx="1"></svg:rect><svg:rect width="4" height="11" x="2" y="9" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsStatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
