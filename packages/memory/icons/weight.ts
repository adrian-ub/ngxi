import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWeightIcon],svg[memory-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H2v-2h1v-4h1v-3h1V8h3V7H7V4h1V3h1V2h4v1h1v1h1v3h-1v1h3v3h1v3h1v4h1ZM12 7V6h1V5h-1V4h-2v1H9v1h1v1Zm5 11v-2h-1v-4h-1v-2H7v2H6v4H5v2Z"></svg:path>`,
})
export class MemoryWeightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
