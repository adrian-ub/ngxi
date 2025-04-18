import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLuminousIcon],svg[icon-park-luminous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 16V26"></svg:path><svg:path d="M38.1421 21.8579L31.1421 28.8579"></svg:path><svg:path d="M44 36H34"></svg:path><svg:path d="M4 36H14"></svg:path><svg:path d="M9.85791 21.8579L16.8579 28.8579"></svg:path><svg:path d="M22 36H26"></svg:path></svg:g>`,
})
export class IconParkLuminousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
