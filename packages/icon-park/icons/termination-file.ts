import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTerminationFileIcon],svg[icon-park-termination-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20"></svg:path><svg:path stroke="#000" d="M16 14H29"></svg:path><svg:path stroke="#000" d="M16 21H21"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M34 44C28.4772 44 24 39.5228 24 34C24 28.4772 28.4772 24 34 24C39.5228 24 44 28.4772 44 34C44 39.5228 39.5228 44 34 44Z"></svg:path><svg:path stroke="#fff" d="M27 27L41 41"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M24 34C24 28.4772 28.4772 24 34 24"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M34 44C39.5228 44 44 39.5228 44 34"></svg:path></svg:g>`,
})
export class IconParkTerminationFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
