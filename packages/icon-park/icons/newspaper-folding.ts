import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNewspaperFoldingIcon],svg[icon-park-newspaper-folding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M22 44L21 36"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M42 44V12H26L27 20L28 28L29 36L22 44H42Z"></svg:path><svg:path stroke="#fff" d="M28 28H33"></svg:path><svg:path stroke="#fff" d="M27 20H33"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M6 4H25L26 12L27 20L28 28L29 36H21H6V4Z"></svg:path><svg:path stroke="#fff" d="M12 12H19"></svg:path><svg:path stroke="#fff" d="M12 20H20"></svg:path><svg:path stroke="#fff" d="M12 28H21"></svg:path></svg:g>`,
})
export class IconParkNewspaperFoldingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
