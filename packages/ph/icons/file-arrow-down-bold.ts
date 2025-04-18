import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileArrowDownBoldIcon],svg[ph-file-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48M160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm100.49-60.49a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 155v-31a12 12 0 0 1 24 0v31l3.51-3.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhFileArrowDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
