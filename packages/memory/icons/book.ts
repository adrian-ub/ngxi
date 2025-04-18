import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBookIcon],svg[memory-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h1V1h14v1h1v18h-1v1H4v-1H3zm8 7h-1V8H9v1H8v1H7V3H5v16h12V3h-5v7h-1z"></svg:path>`,
})
export class MemoryBookIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
