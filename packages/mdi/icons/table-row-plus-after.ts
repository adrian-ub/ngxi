import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowPlusAfterIcon],svg[mdi-table-row-plus-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h2v2h4V3h2v2h4V3h2v2h4V3h2zM4 10h4V7H4zm6 0h4V7h-4zm10 0V7h-4v3zm-9 4h2v3h3v2h-3v3h-2v-3H8v-2h3z"></svg:path>`,
})
export class MdiTableRowPlusAfterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
