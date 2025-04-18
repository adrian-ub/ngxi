import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTriangleRulerIcon],svg[icon-park-triangle-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44L4 4V44H44Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44V41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44V41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 44V41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 44V41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 36H7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 30H7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24H7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 18H7"></svg:path></svg:g>`,
})
export class IconParkTriangleRulerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
