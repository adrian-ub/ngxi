import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorIcon],svg[icon-park-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:line x1="14" x2="34" y1="8" y2="8" stroke-linecap="round"></svg:line><svg:line x1="14" x2="34" y1="8" y2="8" stroke-linecap="round"></svg:line><svg:line x1="14" x2="34" y1="40" y2="40" stroke-linecap="round"></svg:line><svg:rect width="8" height="8" x="36" y="4" fill="#2F88FF" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="4" y="4" fill="#2F88FF" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="36" y="36" fill="#2F88FF" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="8" height="8" x="4" y="36" fill="#2F88FF" stroke-linejoin="round" rx="2"></svg:rect><svg:line x1="40" x2="40" y1="14" y2="34" stroke-linecap="round"></svg:line><svg:line x1="8" x2="8" y1="14" y2="34" stroke-linecap="round"></svg:line></svg:g>`,
})
export class IconParkAnchorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
