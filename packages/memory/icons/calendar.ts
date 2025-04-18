import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCalendarIcon],svg[memory-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H3v-1H2V3h1V2h2V0h2v2h8V0h2v2h2v1h1v16h-1zM4 4v2h14V4zm0 4v10h14V8zm8 4h4v4h-4z"></svg:path>`,
})
export class MemoryCalendarIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
