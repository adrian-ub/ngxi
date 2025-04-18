import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortNumericDescendingIcon],svg[mdi-sort-numeric-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2M9 21H5v-2h4v-1H7a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2m0-6H7v1h2M7 3h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 6h2V5H7Z"></svg:path>`,
})
export class MdiSortNumericDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
