import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderNoneIcon],svg[memory-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10h2v2H2zm16 0h2v2h-2zm-8-8h2v2h-2zm0 16h2v2h-2zm-4 0h2v2H6zm-4-4h2v2H2zm0 4h2v2H2zM2 2h2v2H2zm0 4h2v2H2zm4-4h2v2H6zm8 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 12h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MemoryBorderNoneIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
