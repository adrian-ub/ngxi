import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMenuUpIcon],svg[memory-menu-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14H4v-2h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v1h1v1h1zm-4-2v-1h-1v-1h-1V9h-2v1H9v1H8v1z"></svg:path>`,
})
export class MemoryMenuUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
