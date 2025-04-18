import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShapeCirclePlusIcon],svg[mdi-shape-circle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19a6 6 0 0 0 6-6h2a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8v2a6 6 0 0 0-6 6a6 6 0 0 0 6 6m8-14h3v2h-3v3h-2V7h-3V5h3V2h2z"></svg:path>`,
})
export class MdiShapeCirclePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
