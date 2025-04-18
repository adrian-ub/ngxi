import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileMagnifyingGlassBoldIcon],svg[ph-file-magnifying-glass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M183 80h-23V57ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm96.48-48.49a36 36 0 1 0-17 17l12 12a12 12 0 0 0 17-17ZM112 148a12 12 0 1 1 12 12a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhFileMagnifyingGlassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
