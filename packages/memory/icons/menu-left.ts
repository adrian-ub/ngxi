import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMenuLeftIcon],svg[memory-menu-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v14h-2v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7v-2h1V9h1V8h1V7h1V6h1V5h1V4zm-2 4h-1v1h-1v1h-1v2h1v1h1v1h1z"></svg:path>`,
})
export class MemoryMenuLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
