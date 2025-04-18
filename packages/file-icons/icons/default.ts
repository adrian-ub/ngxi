import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsDefaultIcon],svg[file-icons-default-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 32H0v448h384V128zm64 416H32V64h224l96 96z"></svg:path>`,
})
export class FileIconsDefaultIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
