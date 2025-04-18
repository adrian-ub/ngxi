import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEditorIcon],svg[icon-park-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 33V42C40 43.1046 39.1046 44 38 44H31.5"></svg:path><svg:path stroke-linejoin="round" d="M40 16V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H16"></svg:path><svg:path d="M16 16H30"></svg:path><svg:path d="M23 44L40 23"></svg:path><svg:path d="M16 24H24"></svg:path></svg:g>`,
})
export class IconParkEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
