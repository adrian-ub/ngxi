import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryChestIcon],svg[memory-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H3v-1H2V4h1V3h16v1h1v14h-1M18 8V5H4v3m8 4v-2h-2v2m8 5v-7h-4v3h-1v1H9v-1H8v-3H4v7Z"></svg:path>`,
})
export class MemoryChestIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
