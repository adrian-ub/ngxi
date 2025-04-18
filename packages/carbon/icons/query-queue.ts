import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonQueryQueueIcon],svg[carbon-query-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h18v2H10zm0 6h18v2H10zm5 6h13v2H15zm-5 6h18v2H10zM4 14l7 5l-7 5z"></svg:path>`,
})
export class CarbonQueryQueueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
