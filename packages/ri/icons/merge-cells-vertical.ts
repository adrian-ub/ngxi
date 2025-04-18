import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMergeCellsVerticalIcon],svg[ri-merge-cells-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2-9V5h-5.999v2H15l-3 3l-3-3h2V5H5v6h2v2H5v6h6v-2H9l3-3l3 3h-1.999v2H19v-6h-2v-2zm-8 2H9v-2h2zm4 0h-2v-2h2z"></svg:path>`,
})
export class RiMergeCellsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
