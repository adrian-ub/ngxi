import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryArrowRightDownIcon],svg[memory-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19h2v-1h1v-1h1v-1h1v-1h1v-2h-2v1h-1v1h-1v-4h-1V9h-1V8h-2V7H3v2h6v1h2v2h1v3h-1v-1h-1v-1H8v2h1v1h1v1h1v1h1"></svg:path>`,
})
export class MemoryArrowRightDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
