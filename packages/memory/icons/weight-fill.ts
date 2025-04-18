import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryWeightFillIcon],svg[memory-weight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H2v-2h1v-4h1v-3h1V8h3V7H7V4h1V3h1V2h4v1h1v1h1v3h-1v1h3v3h1v3h1v4h1M12 7V6h1V5h-1V4h-2v1H9v1h1v1Z"></svg:path>`,
})
export class MemoryWeightFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
