import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeTaskfileIcon],svg[vscode-icons-file-type-taskfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#28bdb0" d="M16.002 16.256v13.73l-11.75-7.12V9.132z"></svg:path><svg:path fill="#68d1c7" d="M16.002 16.256v13.73l11.747-7.12V9.132z"></svg:path><svg:path fill="#94ded7" d="M16.002 16.256L4.252 9.133l11.75-7.12l11.747 7.12z"></svg:path>`,
})
export class VscodeIconsFileTypeTaskfileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
