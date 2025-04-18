import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTicTacIcon],svg[tabler-tic-tac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1 6h18m-9-9v18m-8-5l4 4m-4 0l4-4m8-12l4 4m-4 0l4-4m-4 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerTicTacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
