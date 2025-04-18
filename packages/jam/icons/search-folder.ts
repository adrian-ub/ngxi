import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSearchFolderIcon],svg[jam-search-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16a1 1 0 0 1 0-2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.415l-.471-1.334A1 1 0 0 0 8 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1a1 1 0 0 1 0 2a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3m-5.01-.096a5.002 5.002 0 0 1-6.293-7.707a5 5 0 0 1 7.707 6.293l2.9 2.9a1 1 0 0 1-1.415 1.413l-2.9-2.899zm-.636-2.05A3 3 0 1 0 7.11 9.61a3 3 0 0 0 4.243 4.243z"></svg:path>`,
})
export class JamSearchFolderIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
