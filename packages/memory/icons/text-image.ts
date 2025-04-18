import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTextImageIcon],svg[memory-text-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h10v10H2zm2 2v6h6V6zm10-2h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM2 16h16v2H2z"></svg:path>`,
})
export class MemoryTextImageIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
