import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextureIcon],svg[icon-park-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 6L6 12"></svg:path><svg:path d="M42 36L36 42"></svg:path><svg:path d="M22 6L6 22"></svg:path><svg:path d="M32 6L6 32"></svg:path><svg:path d="M42 6L6 42"></svg:path><svg:path d="M42 16L16 42"></svg:path><svg:path d="M42 26L26 42"></svg:path></svg:g>`,
})
export class IconParkTextureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
