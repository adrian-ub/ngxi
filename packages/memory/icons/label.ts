import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryLabelIcon],svg[memory-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h13v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H2v-1H1V5h1zm14 9h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6H3v10h11v-1h1v-1h1z"></svg:path>`,
})
export class MemoryLabelIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
