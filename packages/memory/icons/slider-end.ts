import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memorySliderEndIcon],svg[memory-slider-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12H1v-2h4m4 3H7v-1H6v-2h1V9h2v1h1v2H9m10 3h-2v-3h-6v-2h6V7h2m-8 11H5v-2h1v-1h1v-1h2v1h1v1h1Z"></svg:path>`,
})
export class MemorySliderEndIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
