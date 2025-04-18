import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTabletCellphoneIcon],svg[mdi-tablet-cellphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17a2 2 0 0 1 2 2v2h-4V6H5v12h9v2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 6h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1m1 2v7h4v-7z"></svg:path>`,
})
export class MdiTabletCellphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
