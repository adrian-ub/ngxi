import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableColumnIcon],svg[mdi-table-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 8v4h8v-4zm0 6v4h8v-4zM8 4v4h8V4z"></svg:path>`,
})
export class MdiTableColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
