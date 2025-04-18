import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBorderTopRightIcon],svg[memory-border-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18v2h-2v-2zm-8-8v2H2v-2zm0-4v2H2V6zm12 12v2h-2v-2zM4 14v2H2v-2zm0 4v2H2v-2zm4 0v2H6v-2zM20 2v18h-2V4H2V2z"></svg:path>`,
})
export class MemoryBorderTopRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
