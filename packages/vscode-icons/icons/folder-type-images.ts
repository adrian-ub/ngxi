import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeImagesIcon],svg[vscode-icons-folder-type-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#55bfa0" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:path fill="#2dcc9f" d="M31 15.778V31H10V15.777h21"></svg:path><svg:path fill="#fff" d="M26.674 17.8a1.653 1.653 0 1 0 .845.467a1.66 1.66 0 0 0-.845-.467m-4.591 8.667L18 20.786l-6.062 8.428h8.174q.987-1.374 1.976-2.747m2.955-3.076l-4.188 5.824h8.377q-2.094-2.915-4.189-5.824"></svg:path>`,
})
export class VscodeIconsFolderTypeImagesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
