import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlignVerticalBottomIcon],svg[memory-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16H6V4h4m6 12h-4V8h4m4 12H2v-2h18Z"></svg:path>`,
})
export class MemoryAlignVerticalBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
