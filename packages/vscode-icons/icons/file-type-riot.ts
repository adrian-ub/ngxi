import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeRiotIcon],svg[vscode-icons-file-type-riot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed1846" d="M2 2.914a.414.414 0 0 1 .415-.414H21a9 9 0 0 1 9 9v1.587a.414.414 0 0 1-.415.414h-5.17a.414.414 0 0 1-.415-.41V11.5a3 3 0 0 0-3-3H8.415A.414.414 0 0 0 8 8.917V29.1a.394.394 0 0 1-.416.4A6 6 0 0 1 2 23.51Z"></svg:path><svg:path fill="#ed1846" d="M13.415 14.506a.394.394 0 0 0-.4.414A6 6 0 0 0 19 20.509h4a1 1 0 0 1 1 1V29.1a.394.394 0 0 0 .416.4A6 6 0 0 0 30 23.51v-2a7 7 0 0 0-7-7Z"></svg:path>`,
})
export class VscodeIconsFileTypeRiotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
