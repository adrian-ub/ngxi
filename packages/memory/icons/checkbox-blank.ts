import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCheckboxBlankIcon],svg[memory-checkbox-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h1V3h14v1h1v14h-1v1H4v-1H3zm2 13h12V5H5z"></svg:path>`,
})
export class MemoryCheckboxBlankIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
