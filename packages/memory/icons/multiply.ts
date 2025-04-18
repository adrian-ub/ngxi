import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMultiplyIcon],svg[memory-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h-2v-1h-1v-1h-1v-1h-2v1H9v1H8v1H6v-2h1v-1h1v-1h1v-2H8V9H7V8H6V6h2v1h1v1h1v1h2V8h1V7h1V6h2v2h-1v1h-1v1h-1v2h1v1h1v1h1Z"></svg:path>`,
})
export class MemoryMultiplyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
