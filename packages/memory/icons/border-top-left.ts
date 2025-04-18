import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopLeftIcon],svg[memory-border-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h2v2h-2zm-8 8h2v2h-2zm-4 0h2v2H6zM18 6h2v2h-2zm-4 12h2v2h-2zm4 0h2v2h-2zm0-4h2v2h-2zM2 2h18v2H4v16H2z"></svg:path>`,
})
export class MemoryBorderTopLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
