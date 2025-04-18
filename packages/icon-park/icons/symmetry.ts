import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSymmetryIcon],svg[icon-park-symmetry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 15L24 9V39L4 33V15Z"></svg:path><svg:path d="M24 9L44 15V33L24 39V9Z"></svg:path><svg:path stroke-linecap="round" d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkSymmetryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
