import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderLeftRightIcon],svg[memory-border-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v2h-2V2zm0 16v2h-2v-2zM8 2v2H6V2zm8 0v2h-2V2zm0 16v2h-2v-2zm-8 0v2H6v-2zM4 2v18H2V2zm14 0h2v18h-2z"></svg:path>`,
})
export class MemoryBorderLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
