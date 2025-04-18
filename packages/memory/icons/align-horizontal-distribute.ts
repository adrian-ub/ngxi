import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlignHorizontalDistributeIcon],svg[memory-align-horizontal-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16H8V6h6M4 20H2V2h2m16 18h-2V2h2Z"></svg:path>`,
})
export class MemoryAlignHorizontalDistributeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
