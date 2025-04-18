import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDocumentFolderIcon],svg[icon-park-document-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M32 6H22V42H32V6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M42 6H32V42H42V6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M10 6L18 7L14.5 42L6 41L10 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M37 18V15"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 18V15"></svg:path></svg:g>`,
})
export class IconParkDocumentFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
