import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopLeftBottomIcon],svg[memory-border-top-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h2v2h-2zm0-4h2v2h-2zm0 8h2v2h-2zm2 4v2H2V2h18v2H4v14z"></svg:path>`,
})
export class MemoryBorderTopLeftBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
