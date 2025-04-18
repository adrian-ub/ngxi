import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowBottomRightIcon],svg[memory-arrow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8v9H8v-2h5v-1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V8H6V7h1V6h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1V8z"></svg:path>`,
})
export class MemoryArrowBottomRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
