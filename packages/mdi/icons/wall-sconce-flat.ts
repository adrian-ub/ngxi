import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceFlatIcon],svg[mdi-wall-sconce-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v6h14V5zm.27 8.32L3.5 15.09l1.41 1.41l1.77-1.77zm13.46 0l-1.41 1.41l1.77 1.77l1.41-1.41zM11 16v3h2v-3z"></svg:path>`,
})
export class MdiWallSconceFlatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
