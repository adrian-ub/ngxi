import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMedalOneIcon],svg[icon-park-medal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6 6L16 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M42 6L32 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M31 4L26 16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M17 4L22 16"></svg:path><svg:circle cx="24" cy="30" r="14" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="24" cy="30" r="7" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkMedalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
