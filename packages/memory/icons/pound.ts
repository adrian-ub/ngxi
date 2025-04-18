import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryPoundIcon],svg[memory-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h-2v-4H8v4H6v-4H3v-2h4V9H4V7h4V3h2v4h4V3h2v4h3v2h-4v4h3v2h-4m-1-2V9H9v4Z"></svg:path>`,
})
export class MemoryPoundIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
