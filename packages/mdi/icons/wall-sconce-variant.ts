import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceVariantIcon],svg[mdi-wall-sconce-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 4.5v3h2v-3h-2M4.91 7L3.5 8.41l1.77 1.77l1.41-1.41L4.91 7m14.18 0l-1.77 1.77l1.41 1.41l1.77-1.77L19.09 7M4 11.5c0 2.86 1.5 5.5 4 6.93c2.5 1.43 5.5 1.43 8 0s4-4.07 4-6.93H4z" fill="currentColor"></svg:path>`,
})
export class MdiWallSconceVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
