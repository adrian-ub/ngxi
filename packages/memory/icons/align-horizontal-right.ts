import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlignHorizontalRightIcon],svg[memory-align-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10H4V6h12m0 10H8v-4h8m4 8h-2V2h2Z"></svg:path>`,
})
export class MemoryAlignHorizontalRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
