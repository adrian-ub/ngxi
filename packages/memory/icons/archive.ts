import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArchiveIcon],svg[memory-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h18v6h-1v12H3V8H2zm15 16V8H5v10zM4 4v2h14V4zm3 6h8v2H7z"></svg:path>`,
})
export class MemoryArchiveIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
