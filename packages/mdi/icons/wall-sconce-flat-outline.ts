import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceFlatOutlineIcon],svg[mdi-wall-sconce-flat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v6h14V5zm12 4H7V7h10zM5.27 13.32L3.5 15.09l1.41 1.41l1.77-1.77zm13.46 0l-1.41 1.41l1.77 1.77l1.41-1.41zM11 16v3h2v-3z"></svg:path>`,
})
export class MdiWallSconceFlatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
