import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderInsideIcon],svg[memory-border-inside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h8V2h2v8h8v2h-8v8h-2v-8H2zm4 8h2v2H6zm-4-4h2v2H2zm0 4h2v2H2zM2 2h2v2H2zm0 4h2v2H2zm4-4h2v2H6zm8 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 12h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MemoryBorderInsideIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
