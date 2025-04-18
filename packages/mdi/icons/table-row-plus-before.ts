import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowPlusBeforeIcon],svg[mdi-table-row-plus-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7h2v-2h4v2h2v-2h4v2h2v-2h4v2h2zM4 14h4v3H4zm6 0h4v3h-4zm10 0v3h-4v-3zm-9-4h2V7h3V5h-3V2h-2v3H8v2h3z"></svg:path>`,
})
export class MdiTableRowPlusBeforeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
