import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorSqureIcon],svg[icon-park-anchor-squre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 38C42 28.0589 33.9411 18 24 18C14.0589 18 6 28.0589 6 38"></svg:path><svg:path d="M20 14L10 14"></svg:path><svg:path d="M38 14H28"></svg:path><svg:circle cx="24" cy="14" r="4" fill="#2F88FF"></svg:circle><svg:rect width="8" height="8" x="20" y="10" fill="#2F88FF"></svg:rect><svg:rect width="6" height="6" x="38" y="11" fill="#2F88FF"></svg:rect><svg:rect width="6" height="6" x="4" y="11" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkAnchorSqureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
