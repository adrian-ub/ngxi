import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTableDeleteIcon],svg[ci-table-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h-6v11H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h-2v-3Zm-8 0H5v4h6v-4Zm0 9v-3H5v3h6Zm2-14v3h6V5h-6Zm-2 0H5v3h6V5Z"></svg:path><svg:path fill="currentColor" d="M16 18v-2h8v2h-8Z"></svg:path>`,
})
export class CiTableDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
