import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTrashIcon],svg[memory-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7v9H8V7zm2 0h2v9h-2zM8 2h6v1h5v2h-1v14h-1v1H5v-1H4V5H3V3h5zM6 5v13h10V5z"></svg:path>`,
})
export class MemoryTrashIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
