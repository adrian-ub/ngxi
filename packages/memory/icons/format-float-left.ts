import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryFormatFloatLeftIcon],svg[memory-format-float-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6H4V4h14m-2 5h-6V7h6m-7 5H4V7h5m9 5h-8v-2h8m-2 5H4v-2h12m2 5H4v-2h14Z"></svg:path>`,
})
export class MemoryFormatFloatLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
