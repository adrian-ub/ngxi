import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorOneWayRightIcon],svg[memory-table-top-door-one-way-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h-1v-3h-3v-2h3V7h1v1h1v1h1v1h1v2h-1v1h-1v1h-1m-5 8h-2v-4H6V4h4V0h2m-1 16V6H8v10Z"></svg:path>`,
})
export class MemoryTableTopDoorOneWayRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
