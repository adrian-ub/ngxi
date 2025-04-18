import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryPollIcon],svg[memory-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18H4V8h3m5 10H9V4h3m5 14h-3v-7h3Z"></svg:path>`,
})
export class MemoryPollIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
