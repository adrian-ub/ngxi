import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMenuBottomRightIcon],svg[memory-menu-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15v-2h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h2v11zm4-2h5V8h-1v1h-1v1h-1v1H9v1H8z"></svg:path>`,
})
export class MemoryMenuBottomRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
