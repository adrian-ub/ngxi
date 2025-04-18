import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFolderIcon],svg[memory-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h7v1h1v1h10v1h1v12h-1v1H2v-1H1V4h1zm1 4v10h16V7z"></svg:path>`,
})
export class MemoryFolderIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
