import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEyedropperVariantIcon],svg[mdi-eyedropper-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.92 19L5 17.08L13.06 9L15 10.94m5.71-5.31l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-3.12 3.12l-1.93-1.91l-1.41 1.41l1.42 1.42L3 16.25V21h4.75l8.92-8.92l1.42 1.42l1.41-1.41l-1.92-1.92l3.12-3.12c.4-.4.4-1.05.01-1.42"></svg:path>`,
})
export class MdiEyedropperVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
