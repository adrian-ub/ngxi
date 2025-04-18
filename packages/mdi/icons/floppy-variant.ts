import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloppyVariantIcon],svg[mdi-floppy-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9 7a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiFloppyVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
