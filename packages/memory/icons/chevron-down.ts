import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryChevronDownIcon],svg[memory-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h1V9h1V7h-2v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8V9H7V8H6V7H4v2h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1"></svg:path>`,
})
export class MemoryChevronDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
