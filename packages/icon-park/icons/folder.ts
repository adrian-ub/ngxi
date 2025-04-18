import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderIcon],svg[icon-park-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 6C7 4.89543 7.89543 4 9 4H39C40.1046 4 41 4.89543 41 6V42C41 43.1046 40.1046 44 39 44H9C7.89543 44 7 43.1046 7 42V6Z"></svg:path><svg:path stroke="#fff" d="M16 29H20"></svg:path><svg:path stroke="#fff" d="M16 35H26"></svg:path><svg:path stroke="#fff" d="M8 5C8 5 11.7647 18 24 18C36.2353 18 40 5 40 5"></svg:path><svg:circle cx="24" cy="18" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" d="M15 4H9C7.89543 4 7 4.89543 7 6V12"></svg:path><svg:path stroke="#000" d="M33 4H39C40.1046 4 41 4.89543 41 6V12"></svg:path></svg:g>`,
})
export class IconParkFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
