import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryDivisionIcon],svg[memory-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8h-2V7H9V5h1V4h2v1h1v2h-1Zm5 4H5v-2h12Zm-5 6h-2v-1H9v-2h1v-1h2v1h1v2h-1Z"></svg:path>`,
})
export class MemoryDivisionIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
