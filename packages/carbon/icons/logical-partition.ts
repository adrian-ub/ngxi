import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogicalPartitionIcon],svg[carbon-logical-partition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="7" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M27 22v-4a2 2 0 0 0-2-2h-8v-4h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9v4H7a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H7v-4h8v4h-1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1v-4h8v4h-1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM8 28H4v-4h4zm10-4v4h-4v-4zM6 10V4h20v6zm22 18h-4v-4h4z"></svg:path>`,
})
export class CarbonLogicalPartitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
