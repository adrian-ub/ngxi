import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBattleAxeIcon],svg[memory-battle-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1h-4v1h-1v1H9v1H8v4h4v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v1H1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v4h4v-1h1v-1h1v-1h1V7h-4V5h-2"></svg:path>`,
})
export class MemoryBattleAxeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
