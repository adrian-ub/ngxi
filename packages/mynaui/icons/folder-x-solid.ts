import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderXSolidIcon],svg[mynaui-folder-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25h-7.34a1.25 1.25 0 0 1-.826-.312L8.562 3.936a2.75 2.75 0 0 0-1.817-.686H5A2.75 2.75 0 0 0 2.25 6m7.72 5.47a.75.75 0 0 1 1.06 0l.884.884l.884-.884a.75.75 0 0 1 1.06 1.06l-.883.884l.884.884a.75.75 0 0 1-1.06 1.06l-.885-.883l-.884.884a.75.75 0 1 1-1.06-1.06l.884-.885l-.884-.884a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiFolderXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
