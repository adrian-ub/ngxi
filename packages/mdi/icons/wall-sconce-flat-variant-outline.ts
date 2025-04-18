import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceFlatVariantOutlineIcon],svg[mdi-wall-sconce-flat-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v6h14v-6zm12 4H7v-2h10zm1.73-6.32l1.77-1.77l-1.41-1.41l-1.77 1.77zm-13.46 0l1.41-1.41L4.91 7.5L3.5 8.91zM13 8V5h-2v3z"></svg:path>`,
})
export class MdiWallSconceFlatVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
