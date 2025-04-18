import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRotateLeftVariantIcon],svg[mdi-rotate-left-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h3a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m16 13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-9v-7zM14 4a8 8 0 0 1 8 8l-.06 1h-2.02l.08-1a6 6 0 0 0-6-6v3l-4-4l4-4z"></svg:path>`,
})
export class MdiRotateLeftVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
