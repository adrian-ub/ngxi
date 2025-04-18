import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParabolaIcon],svg[icon-park-parabola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 25H6C12 25 16 9 24 9C32 9 36 25 42 25H44"></svg:path><svg:path d="M4 33V39"></svg:path><svg:path d="M24 33V39"></svg:path><svg:path d="M44 33V39"></svg:path><svg:path d="M4 36H44"></svg:path></svg:g>`,
})
export class IconParkParabolaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
