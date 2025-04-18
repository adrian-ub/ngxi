import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCheckerLargeIcon],svg[memory-checker-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22h-6v-6h-6v6H5v-6H0v-6h5V5H0V0h5v5h5V0h6v5h6v5h-6v6h6m-6-6V5h-6v5m0 6v-6H5v6Z"></svg:path>`,
})
export class MemoryCheckerLargeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
