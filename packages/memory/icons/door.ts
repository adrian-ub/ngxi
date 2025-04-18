import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryDoorIcon],svg[memory-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h2v2h-2zm4-8v1h1v15h2v2H3v-2h2V3h1V2zm-1 2H7v14h8z"></svg:path>`,
})
export class MemoryDoorIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
