import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortBoolAscendingIcon],svg[mdi-sort-bool-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2zM7 3C4.79 3 3 4.79 3 7s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class MdiSortBoolAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
