import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeBlocIcon],svg[vscode-icons-folder-type-bloc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#55a3bf" d="M27.417 5.5H18.19l-2.083 4.2H4.5v16.8h25v-21Zm0 4.2h-8.135l1.091-2.1h7.044Z"></svg:path><svg:path d="m31 26l-8.571 5l-8.572-5V16l8.572-5L31 16z"></svg:path><svg:path fill="#0084c1" d="M15.624 17.071L22.429 21l6.804-3.929l-6.804-3.928z"></svg:path><svg:path fill="#82eddf" d="M15.624 17.071v7.858l6.805 3.928V21z"></svg:path><svg:path fill="#00d3b9" d="M22.429 28.857V21l6.804-3.929v7.858z"></svg:path>`,
})
export class VscodeIconsFolderTypeBlocIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
