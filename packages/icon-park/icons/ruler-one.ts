import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRulerOneIcon],svg[icon-park-ruler-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M43 41H23"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M38.7183 5H21L5 41H22.662L38.7183 5Z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M9.95898 29.8823H17.9872"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M13.2646 22.4707H21.2928"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M16.7744 14.6H24.8026"></svg:path><svg:path stroke="#000" d="M21 5L5 41"></svg:path></svg:g>`,
})
export class IconParkRulerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
