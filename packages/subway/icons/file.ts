import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFileIcon],svg[subway-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0v128h128zm-21.3 0H64v512h384V149.3H298.7z"></svg:path>`,
})
export class SubwayFileIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
