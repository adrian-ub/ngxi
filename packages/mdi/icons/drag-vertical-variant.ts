import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDragVerticalVariantIcon],svg[mdi-drag-vertical-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H9V3h2zm4-18h-2v18h2z"></svg:path>`,
})
export class MdiDragVerticalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
