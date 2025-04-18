import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderBottomIcon],svg[memory-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12h-2v-2h2zM4 12H2v-2h2zm8-8h-2V2h2zm4 0h-2V2h2zm4 4h-2V6h2zm0-4h-2V2h2zm0 12h-2v-2h2zM4 16H2v-2h2zM8 4H6V2h2zM4 4H2V2h2zm0 4H2V6h2zm16 12H2v-2h18z"></svg:path>`,
})
export class MemoryBorderBottomIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
