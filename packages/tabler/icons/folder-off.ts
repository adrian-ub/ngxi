import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFolderOffIcon],svg[tabler-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h1l3 3h7a2 2 0 0 1 2 2v8m-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 1.189-1.829M3 3l18 18"></svg:path>`,
})
export class TablerFolderOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
