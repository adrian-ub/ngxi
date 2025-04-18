import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowTopRightIcon],svg[memory-arrow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5h9v9h-2V9h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v-1H6v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7H8z"></svg:path>`,
})
export class MemoryArrowTopRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
