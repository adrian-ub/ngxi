import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRotateRightVariantIcon],svg[mdi-rotate-right-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V1l4 4l-4 4V6a6 6 0 0 0-6 6l.08 1H2.06L2 12a8 8 0 0 1 8-8m7-2h3a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2M4 15h9v7H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiRotateRightVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
