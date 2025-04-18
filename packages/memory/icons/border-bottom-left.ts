import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderBottomLeftIcon],svg[memory-border-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4V2h2v2zm8 8v-2h2v2zm0 4v-2h2v2zM6 4V2h2v2zm12 4V6h2v2zm0-4V2h2v2zm-4 0V2h2v2zM2 20V2h2v16h16v2z"></svg:path>`,
})
export class MemoryBorderBottomLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
