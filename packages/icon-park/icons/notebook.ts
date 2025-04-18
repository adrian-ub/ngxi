import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNotebookIcon],svg[icon-park-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 6C10 4.89543 10.8954 4 12 4H40C41.1046 4 42 4.89543 42 6V42C42 43.1046 41.1046 44 40 44H12C10.8954 44 10 43.1046 10 42V6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 6V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 14H14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 24H14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 34H14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M27 4H39"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M27 44H39"></svg:path></svg:g>`,
})
export class IconParkNotebookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
