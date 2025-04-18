import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryGlaiveIcon],svg[memory-glaive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18H3v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9H9V8h1V7h1v1h1V7h2V6h1V5h1V3h1V2h1v5h-1v1h-1v1h-3v1h1v1h-1v1h-1v-1h-1v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryGlaiveIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
