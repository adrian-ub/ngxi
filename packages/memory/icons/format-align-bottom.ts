import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatAlignBottomIcon],svg[memory-format-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h-2v-1H9V9H8V8H7V7H6V6h4V2h2v4h4v1h-1v1h-1v1h-1v1h-1m6 5H4v-2h14m-4 5H4v-2h10Z"></svg:path>`,
})
export class MemoryFormatAlignBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
