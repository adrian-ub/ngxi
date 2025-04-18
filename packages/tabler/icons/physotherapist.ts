import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhysotherapistIcon],svg[tabler-physotherapist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 15l-1-3l4-2l4 1h3.5M3 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8-13a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1 11v-7M8 20h7l1-4l4-2m-2 6h3"></svg:path>`,
})
export class TablerPhysotherapistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
