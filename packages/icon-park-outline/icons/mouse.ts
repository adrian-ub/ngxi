import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMouseIcon],svg[icon-park-outline-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 16H12v16c0 6.627 5.373 12 12 12s12-5.373 12-12V16z" clip-rule="evenodd"></svg:path><svg:path d="M36 16c0-6.627-5.373-12-12-12v12zM24 4c-6.627 0-12 5.373-12 12h12z"></svg:path></svg:g>`,
})
export class IconParkOutlineMouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
