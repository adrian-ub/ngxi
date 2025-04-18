import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularFolderIcon],svg[fa-regular-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48m0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464z"></svg:path>`,
})
export class FaRegularFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
