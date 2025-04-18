import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMenuBottomLeftIcon],svg[memory-menu-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2H7zm2 4v5h5v-1h-1v-1h-1v-1h-1V9h-1V8z"></svg:path>`,
})
export class MemoryMenuBottomLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
