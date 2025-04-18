import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlayProtectedContentIcon],svg[mdi-play-protected-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v13h9v-2H4V7h13v4h2V5zm7 4v5l3.5-2.5zm12.04 2.67l-4.95 4.95l-2.13-2.12l-1.41 1.41l3.54 3.54l6.36-6.36z"></svg:path>`,
})
export class MdiPlayProtectedContentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
