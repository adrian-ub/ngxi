import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeJustIcon],svg[vscode-icons-file-type-just-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="14"></svg:circle><svg:ellipse cx="16" cy="8.7" fill="#fff" rx="3.8" ry="3.9"></svg:ellipse><svg:ellipse cx="16" cy="23.3" fill="#fff" rx="3.8" ry="3.9"></svg:ellipse>`,
})
export class VscodeIconsFileTypeJustIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
