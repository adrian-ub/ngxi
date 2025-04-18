import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTireSwingIcon],svg[icon-park-tire-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M4 4C4 4 10 10 24 10C38 10 44 4 44 4"></svg:path><svg:path stroke="#000" d="M24 10V16"></svg:path><svg:ellipse cx="30" cy="30" fill="#2F88FF" stroke="#000" rx="8" ry="14"></svg:ellipse><svg:ellipse cx="30" cy="30" fill="#43CCF8" stroke="#fff" rx="3" ry="6"></svg:ellipse><svg:path stroke="#000" d="M18 44C13.5817 44 10 37.732 10 30C10 22.268 13.5817 16 18 16"></svg:path><svg:path stroke="#000" d="M30 16H18"></svg:path><svg:path stroke="#000" d="M30 44H18"></svg:path><svg:path stroke="#000" d="M22 29H10"></svg:path><svg:path stroke="#000" d="M23 22L12 22"></svg:path><svg:path stroke="#000" d="M23 37H12"></svg:path></svg:g>`,
})
export class IconParkTireSwingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
