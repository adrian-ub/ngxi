import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSymmetryIcon],svg[icon-park-outline-symmetry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m4 15l20-6v30L4 33zm20-6l20 6v18l-20 6z"></svg:path><svg:path stroke-linecap="round" d="M24 4v40"></svg:path></svg:g>`,
})
export class IconParkOutlineSymmetryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
