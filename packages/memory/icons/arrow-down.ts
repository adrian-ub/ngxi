import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowDownIcon],svg[memory-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17h-2v-1H9v-1H8v-1H7v-1H6v-2h2v1h1v1h1V4h2v9h1v-1h1v-1h2v2h-1v1h-1v1h-1v1h-1"></svg:path>`,
})
export class MemoryArrowDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
