import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatFolderIcon],svg[topcoat-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 7.5v26c0 2.52.51 3 3 3h34c2.471 0 3-.46 3-3v-21c0-2.46-.471-3-3-3h-17v-2c0-2.5-.52-3-3-3h-14c-2.48 0-3 .43-3 3"></svg:path>`,
})
export class TopcoatFolderIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
