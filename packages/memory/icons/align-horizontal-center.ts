import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAlignHorizontalCenterIcon],svg[memory-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20h-2v-4H6v-4h4v-2H4V6h6V2h2v4h6v4h-6v2h4v4h-4Z"></svg:path>`,
})
export class MemoryAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
