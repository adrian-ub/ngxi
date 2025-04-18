import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortBoolDescendingIcon],svg[mdi-sort-bool-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2M5 7c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2s-2 .9-2 2m2-4c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"></svg:path>`,
})
export class MdiSortBoolDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
