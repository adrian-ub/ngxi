import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortBoolAscendingVariantIcon],svg[mdi-sort-bool-ascending-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17h3l-4 4l-4-4h3V3h2zM9 13H5c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2m-2.73 6.5l-2.53-2.55l1.07-1.05l1.47 1.49L9.2 14.5l1.06 1.05zM9 3H5c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 6H5V5h4z"></svg:path>`,
})
export class MdiSortBoolAscendingVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
