import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableFurnitureIcon],svg[mdi-table-furniture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h20v3h-2l1 9h-2.5l-.56-5H6.06l-.56 5H3l1-9H2zm15.5 3h-11l-.21 2h11.42z"></svg:path>`,
})
export class MdiTableFurnitureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
