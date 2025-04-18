import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCactusIcon],svg[tabler-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9v1a3 3 0 0 0 3 3h1m8-5v5a3 3 0 0 1-3 3h-1m-4 5V5a2 2 0 1 1 4 0v16m-7 0h10"></svg:path>`,
})
export class TablerCactusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
