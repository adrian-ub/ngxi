import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMinusIcon],svg[memory-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12H5v-2h12Z"></svg:path>`,
})
export class MemoryMinusIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
