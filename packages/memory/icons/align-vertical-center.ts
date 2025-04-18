import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlignVerticalCenterIcon],svg[memory-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18H6v-6H2v-2h4V4h4v6h2V6h4v4h4v2h-4v4h-4v-4h-2Z"></svg:path>`,
})
export class MemoryAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
