import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDarhboardAltIcon],svg[lets-icons-darhboard-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:rect width="6" height="7" x="4" y="4" rx="1"></svg:rect><svg:rect width="6" height="5" x="4" y="15" rx="1"></svg:rect><svg:rect width="6" height="5" x="14" y="4" rx="1"></svg:rect><svg:rect width="6" height="7" x="14" y="13" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsDarhboardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
