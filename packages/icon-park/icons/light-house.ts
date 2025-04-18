import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLightHouseIcon],svg[icon-park-light-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M6 44H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M17 20H31"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M19 20H24H29L32 44H16L19 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M19 9L21 20H27L29 9"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 12L29 9L24 4L19 9L16 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M37 7L40 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 7L8 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M37 19L40 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 19L8 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 13H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 13H6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 28L30 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 36H31"></svg:path><svg:path stroke="#000" d="M29 20L32 44"></svg:path><svg:path stroke="#000" d="M19 20L16 44"></svg:path></svg:g>`,
})
export class IconParkLightHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
