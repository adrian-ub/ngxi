import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopBottomIcon],svg[memory-border-top-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h2v2H2zm16 0h2v2h-2zM2 14h2v2H2zm0-8h2v2H2zm16 0h2v2h-2zm0 8h2v2h-2zM2 18h18v2H2zM2 4V2h18v2z"></svg:path>`,
})
export class MemoryBorderTopBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
