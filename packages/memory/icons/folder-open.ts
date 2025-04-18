import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFolderOpenIcon],svg[memory-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4h1V3h7v1h1v1h10v1h1v12h-1v1H2v-1H1zm2 5h16V7H9V6H8V5H3zm0 8h16v-6H3z"></svg:path>`,
})
export class MemoryFolderOpenIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
