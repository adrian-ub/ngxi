import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeBlocOpenedIcon],svg[vscode-icons-folder-type-bloc-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7bc0db" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.626Z"></svg:path><svg:path d="m31 26l-8.571 5l-8.572-5V16l8.572-5L31 16z"></svg:path><svg:path fill="#0084c1" d="M15.624 17.071L22.429 21l6.804-3.929l-6.804-3.928z"></svg:path><svg:path fill="#82eddf" d="M15.624 17.071v7.858l6.805 3.928V21z"></svg:path><svg:path fill="#00d3b9" d="M22.429 28.857V21l6.804-3.929v7.858z"></svg:path>`,
})
export class VscodeIconsFolderTypeBlocOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
