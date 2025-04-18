import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShredderIcon],svg[mdi-shredder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v4h2V5h8v2h2V3zM5 8a3 3 0 0 0-3 3v6h3v-3h14v3h3v-6a3 3 0 0 0-3-3zm13 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 16v5h2v-5zm4 0v4h2v-4zm4 0v5h2v-5z"></svg:path>`,
})
export class MdiShredderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
