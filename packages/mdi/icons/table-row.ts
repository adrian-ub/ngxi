import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableRowIcon],svg[mdi-table-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM4 14h4v-4H4zm6 0h4v-4h-4zm6 0h4v-4h-4z"></svg:path>`,
})
export class MdiTableRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
