import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDocumentFolderIcon],svg[icon-park-outline-document-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 6H22v36h10zm10 0H32v36h10zM10 6l8 1l-3.5 35L6 41z"></svg:path><svg:path stroke-linecap="round" d="M37 18v-3m-10 3v-3"></svg:path></svg:g>`,
})
export class IconParkOutlineDocumentFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
