import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShapeSquarePlusIcon],svg[mdi-shape-square-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h3v2h-3v3h-2V7h-3V5h3V2h2zm-2 14v-6h2v8H3V5h8v2H5v12z"></svg:path>`,
})
export class MdiShapeSquarePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
