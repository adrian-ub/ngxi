import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCheckboxMarkedIcon],svg[memory-checkbox-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h1V3h14v1h-1v1H5v12h12v-6h1v-1h1v8h-1v1H4v-1H3zm3 5h2v1h1v1h1v1h2v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6z"></svg:path>`,
})
export class MemoryCheckboxMarkedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
