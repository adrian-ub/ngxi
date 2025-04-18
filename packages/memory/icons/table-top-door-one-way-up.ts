import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorOneWayUpIcon],svg[memory-table-top-door-one-way-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9h-2V6H7V5h1V4h1V3h1V2h2v1h1v1h1v1h1v1h-3m6 10H4v-4H0v-2h22v2h-4m-2 2v-3H6v3Z"></svg:path>`,
})
export class MemoryTableTopDoorOneWayUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
