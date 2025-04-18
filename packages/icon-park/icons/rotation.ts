import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRotationIcon],svg[icon-park-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"></svg:path><svg:path stroke-dasharray="2 6" d="M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"></svg:path></svg:g>`,
})
export class IconParkRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
