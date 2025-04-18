import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPrisonIcon],svg[icon-park-prison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M6 4V12C6 12.5523 6.44772 13 7 13H19C19.5523 13 20 12.5523 20 12V4"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M6 7H20"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M28 22H6V44H28"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M16 44V13"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M10 22V13"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M13 4V7"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M27 13V16"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M35 13V16"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M43 13V16"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M43 44V16H27V44H43Z"></svg:path><svg:path stroke="#fff" d="M35 34V44"></svg:path><svg:path stroke="#000" d="M31 44L39 44"></svg:path></svg:g>`,
})
export class IconParkPrisonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
