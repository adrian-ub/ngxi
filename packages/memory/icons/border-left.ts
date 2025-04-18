import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderLeftIcon],svg[memory-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20v-2h2v2zm0-16V2h2v2zm8 8v-2h2v2zm0 4v-2h2v2zm-4 4v-2h2v2zm4 0v-2h2v2zM6 20v-2h2v2zM6 4V2h2v2zm12 4V6h2v2zm0-4V2h2v2zm-4 0V2h2v2zM2 20V2h2v18z"></svg:path>`,
})
export class MemoryBorderLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
