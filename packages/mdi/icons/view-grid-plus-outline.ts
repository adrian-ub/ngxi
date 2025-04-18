import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewGridPlusOutlineIcon],svg[mdi-view-grid-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21h8v-8H3m2 2h4v4H5m-2-8h8V3H3m2 2h4v4H5m8-6v8h8V3m-2 6h-4V5h4m-1 11h3v2h-3v3h-2v-3h-3v-2h3v-3h2Z"></svg:path>`,
})
export class MdiViewGridPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
