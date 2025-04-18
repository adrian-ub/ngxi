import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShapeRectanglePlusIcon],svg[mdi-shape-rectangle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6h3v2h-3v3h-2V8h-3V6h3V3h2zm-2 11v-3h2v5H3V6h8v2H5v9z"></svg:path>`,
})
export class MdiShapeRectanglePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
