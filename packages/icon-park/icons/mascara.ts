import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMascaraIcon],svg[icon-park-mascara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="12" height="28" x="28" y="16" stroke="#000" stroke-linejoin="round"></svg:rect><svg:rect width="12" height="16" x="8" y="28" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:rect><svg:path stroke="#000" stroke-linejoin="round" d="M14 4V28"></svg:path><svg:path stroke="#fff" d="M20 36H8"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M20 32V40"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M8 32V40"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M18 9H10"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M20 15L8 15"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M18 21H10"></svg:path></svg:g>`,
})
export class IconParkMascaraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
