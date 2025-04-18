import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopRightBottomIcon],svg[memory-border-top-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12H2v-2h2zm0 4H2v-2h2zm0-8H2V6h2zM2 4V2h18v18H2v-2h16V4z"></svg:path>`,
})
export class MemoryBorderTopRightBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
