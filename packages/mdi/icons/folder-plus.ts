import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderPlusIcon],svg[mdi-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0 .34.04.67.09 1H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8a2 2 0 0 1 2 2v5.81c-.88-.51-1.9-.81-3-.81c-3.31 0-6 2.69-6 6m7-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
