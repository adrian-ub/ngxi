import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeSpacengineIcon],svg[vscode-icons-file-type-spacengine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4780f5" d="M24 5h2v22h-2zm-5 4.409L6 13.941v2.13l13 5v-2.142L8.906 15.046L19 11.527z"></svg:path>`,
})
export class VscodeIconsFileTypeSpacengineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
