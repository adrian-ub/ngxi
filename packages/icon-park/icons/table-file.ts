import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTableFileIcon],svg[icon-park-table-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 6H6C4.89543 6 4 6.89543 4 8V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V8C44 6.89543 43.1046 6 42 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 18H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17.5 18V42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30.5 18V42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 30H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 8V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V8"></svg:path></svg:g>`,
})
export class IconParkTableFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
