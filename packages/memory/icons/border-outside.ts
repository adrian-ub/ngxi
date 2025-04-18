import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderOutsideIcon],svg[memory-border-outside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h18v18H2zm2 2v14h14V4zm6 2h2v2h-2zm0 4h2v2h-2zm-4 0h2v2H6zm8 0h2v2h-2zm-4 4h2v2h-2z"></svg:path>`,
})
export class MemoryBorderOutsideIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
