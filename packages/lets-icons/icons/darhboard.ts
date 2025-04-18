import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDarhboardIcon],svg[lets-icons-darhboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:rect width="6" height="6" x="4" y="4" rx="1"></svg:rect><svg:rect width="6" height="6" x="4" y="14" rx="1"></svg:rect><svg:rect width="6" height="6" x="14" y="14" rx="1"></svg:rect><svg:rect width="6" height="6" x="14" y="4" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsDarhboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
