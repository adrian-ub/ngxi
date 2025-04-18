import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSphereIcon],svg[icon-park-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 32C35.0457 32 44 28.4183 44 24C44 19.5817 35.0457 16 24 16C12.9543 16 4 19.5817 4 24C4 28.4183 12.9543 32 24 32Z"></svg:path><svg:path stroke-linecap="round" d="M32 24C32 35.0457 28.4183 44 24 44C19.5817 44 16 35.0457 16 24C16 12.9543 19.5817 4 24 4C28.4183 4 32 12.9543 32 24Z"></svg:path><svg:circle cx="24" cy="24" r="20"></svg:circle></svg:g>`,
})
export class IconParkSphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
