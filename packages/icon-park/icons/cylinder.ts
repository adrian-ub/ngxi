import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCylinderIcon],svg[icon-park-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 10C44 13.3137 35.0457 16 24 16C12.9543 16 4 13.3137 4 10C4 6.68629 12.9543 4 24 4C35.0457 4 44 6.68629 44 10Z"></svg:path><svg:path fill="#2F88FF" d="M44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4 41.3137 4 38C4 34.6863 12.9543 32 24 32C35.0457 32 44 34.6863 44 38Z"></svg:path><svg:path d="M44 10V38"></svg:path><svg:path d="M4 10V38"></svg:path></svg:g>`,
})
export class IconParkCylinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
