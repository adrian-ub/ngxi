import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUploadDocumentNoteIcon],svg[ix-upload-document-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m362.643 311.1l94.17 94.17l-30.17 30.17l-42.667-42.656v97.84H341.31v-97.84l-42.667 42.656l-30.17-30.17zM298.667 42.667l106.666 106.667v173.802l-42.554-42.553l-.113.112V167.007l-81.672-81.673H106.667v341.333h153.517l38.59 38.59l21.32-21.32l.007 25.396H64V42.668zm-21.334 298.667v24.694L259.361 384H128v-42.666zM260 128l60 60l-132 132h-60v-60zm-.01 45.248L160 273.238V288h14.72l100.01-100.01z"></svg:path>`,
})
export class IxUploadDocumentNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
