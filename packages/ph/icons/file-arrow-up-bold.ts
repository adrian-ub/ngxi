import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileArrowUpBoldIcon],svg[ph-file-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M183 80h-23V57ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm100.49-72.49a12 12 0 0 1-17 17L140 153v31a12 12 0 0 1-24 0v-31l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhFileArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
