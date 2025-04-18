import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeDaprOpenedIcon],svg[vscode-icons-folder-type-dapr-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7b8bdb" d="M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.626Z"></svg:path><svg:path fill="#0d2192" d="M30.53 28.808h-3.457v-8.29a.253.253 0 0 0-.252-.253H14.35a.253.253 0 0 0-.252.253v8.29H10.47a.47.47 0 0 0-.47.47v1.252a.47.47 0 0 0 .47.47h20.06a.47.47 0 0 0 .47-.47v-1.252a.47.47 0 0 0-.47-.47"></svg:path><svg:path fill="#20329b" d="M10.47 31h6.03v-1.6h2.4v-9.135h-4.55a.253.253 0 0 0-.252.253v8.29H10.47a.47.47 0 0 0-.47.47v1.252a.47.47 0 0 0 .47.47"></svg:path>`,
})
export class VscodeIconsFolderTypeDaprOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
