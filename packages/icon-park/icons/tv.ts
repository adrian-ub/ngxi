import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTvIcon],svg[icon-park-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="28" x="5" y="14" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 14L38 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 14L10 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 20L35 26"></svg:path><svg:rect width="4" height="4" x="33" y="32" fill="#000" rx="2"></svg:rect></svg:g>`,
})
export class IconParkTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
