import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopLeftRightIcon],svg[memory-border-top-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18v2h-2v-2zm4 0v2h-2v-2zm-8 0v2H6v-2zm-4 2H2V2h18v18h-2V4H4z"></svg:path>`,
})
export class MemoryBorderTopLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
