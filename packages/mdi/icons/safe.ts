import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSafeIcon],svg[mdi-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2v1h2v-1h11v1h2v-1a2 2 0 0 0 2-2v-1h1v-2h-1V9h1V7h-1V6a2 2 0 0 0-2-2zm0 2h15v11H4zm9.5 1.5a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4M5 9v5h2V9zm8.5.5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiSafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
