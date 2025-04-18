import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCheckboxIntermediateIcon],svg[memory-checkbox-intermediate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15H7V7h8m3 12H4v-1H3V4h1V3h14v1h1v14h-1m-1-1V5H5v12Z"></svg:path>`,
})
export class MemoryCheckboxIntermediateIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
