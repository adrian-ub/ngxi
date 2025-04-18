import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderBottomLeftRightIcon],svg[memory-border-bottom-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V2h2v2zM6 4V2h2v2zm8 0V2h2v2zm4-2h2v18H2V2h2v16h14z"></svg:path>`,
})
export class MemoryBorderBottomLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
