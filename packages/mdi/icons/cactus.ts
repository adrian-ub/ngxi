import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCactusIcon],svg[mdi-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16v5h-4v-3H9a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1a1 1 0 0 1 1 1v3c0 .56.45 1 1 1h1V6a2 2 0 0 1 2-2a2 2 0 0 1 2 2v8h1a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3z"></svg:path>`,
})
export class MdiCactusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
