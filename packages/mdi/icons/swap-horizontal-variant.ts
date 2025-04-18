import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSwapHorizontalVariantIcon],svg[mdi-swap-horizontal-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 6l4 4V7h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H8a4 4 0 0 0-4 4a4 4 0 0 0 4 4h8v3l4-4l-4-4v3H8a2 2 0 0 1-2-2a2 2 0 0 1 2-2h8a4 4 0 0 0 4-4a4 4 0 0 0-4-4H8V2z"></svg:path>`,
})
export class MdiSwapHorizontalVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
