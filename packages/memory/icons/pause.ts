import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryPauseIcon],svg[memory-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h3v14H6zm7 14V4h3v14z"></svg:path>`,
})
export class MemoryPauseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
