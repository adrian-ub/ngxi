import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderMinusIcon],svg[icon-park-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 9C5 7.89543 5.89543 7 7 7H19L24 13H41C42.1046 13 43 13.8954 43 15V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17.9497 28L29.9497 28"></svg:path></svg:g>`,
})
export class IconParkFolderMinusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
