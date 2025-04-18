import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFloppyDiskIcon],svg[memory-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h1V2h13v1h1v1h1v1h1v1h1v13h-1v1H3v-1H2zm16 4h-1V6h-1V5h-1v4H6V4H4v14h2v-5h10v5h2zm-7-3v3h2V4zm3 14v-3H8v3z"></svg:path>`,
})
export class MemoryFloppyDiskIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
