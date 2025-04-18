import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDragHorizontalVariantIcon],svg[mdi-drag-horizontal-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11H3V9h18zm0 2H3v2h18z"></svg:path>`,
})
export class MdiDragHorizontalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
