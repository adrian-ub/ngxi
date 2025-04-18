import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlignHorizontalLeftIcon],svg[memory-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10H6V6h12m-4 10H6v-4h8M4 20H2V2h2Z"></svg:path>`,
})
export class MemoryAlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
