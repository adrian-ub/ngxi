import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsManjaroIcon],svg[file-icons-manjaro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h144V144h184V0zm184 184v328h144V184zM368 0v512h144V0z"></svg:path>`,
})
export class FileIconsManjaroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
