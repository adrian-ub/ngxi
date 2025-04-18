import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFoldersFilledIcon],svg[tabler-folders-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .707.293L14.415 4H19a3 3 0 0 1 2.995 2.824L22 7v7a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3zM6 8H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1H9a3 3 0 0 1-3-3z"></svg:path>`,
})
export class TablerFoldersFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
