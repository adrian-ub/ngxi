import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightUpIcon],svg[memory-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3h2v1h1v1h1v1h1v1h1v2h-2V8h-1V7h-1v4h-1v2h-1v1h-2v1H3v-2h6v-1h2v-2h1V7h-1v1h-1v1H8V7h1V6h1V5h1V4h1"></svg:path>`,
})
export class MemoryArrowRightUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
