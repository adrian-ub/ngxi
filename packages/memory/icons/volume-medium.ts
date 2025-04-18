import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryVolumeMediumIcon],svg[memory-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7v1h1v2h1v2h-1v2h-1v1h-1V7zM8 8V7h1V6h1V5h1V4h1V3h1v16h-1v-1h-1v-1h-1v-1H9v-1H8v-1H4V8zm-2 2v2h3v1h1v1h1V8h-1v1H9v1z"></svg:path>`,
})
export class MemoryVolumeMediumIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
