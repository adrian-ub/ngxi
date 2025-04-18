import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBedsideTwoIcon],svg[icon-park-bedside-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 18H44V42H4V18Z"></svg:path><svg:path stroke="#fff" d="M22 24H26"></svg:path><svg:path stroke="#fff" d="M4 30H44"></svg:path><svg:path stroke="#fff" d="M22 36H26"></svg:path><svg:path stroke="#000" d="M8 42V46"></svg:path><svg:path stroke="#000" d="M40 42V46"></svg:path><svg:path stroke="#000" d="M24 18V10"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M32 10C32 5.58172 28.4183 2 24 2C19.5817 2 16 5.58172 16 10H32Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M44 26V34"></svg:path><svg:path stroke="#000" d="M4 26V34"></svg:path></svg:g>`,
})
export class IconParkBedsideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
