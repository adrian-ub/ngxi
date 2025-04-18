import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryUmbrellaIcon],svg[memory-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20H7v-1H6v-3h2v2h2v-6H3V7h1V6h1V5h1V4h2V3h6v1h2v1h1v1h1v1h1v5h-7v7h-1m6-9V8h-1V7h-1V6h-2V5H9v1H7v1H6v1H5v2Z"></svg:path>`,
})
export class MemoryUmbrellaIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
