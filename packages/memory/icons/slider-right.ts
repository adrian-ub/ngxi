import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memorySliderRightIcon],svg[memory-slider-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12h-4v-2h4m-6 3h-2v-1h-1v-2h1V9h2v1h1v2h-1M5 15H3V7h2v3h6v2H5m12 6h-6v-2h1v-1h1v-1h2v1h1v1h1Z"></svg:path>`,
})
export class MemorySliderRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
