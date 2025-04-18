import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryNotificationIcon],svg[memory-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20v1h-2v-1H8v-2h6v2zM2 15h1v-1h1V6h1V4h1V3h2V2h2V1h2v1h2v1h2v1h1v2h1v8h1v1h1v2H2zm4 0h10V7h-1V5h-2V4H9v1H7v2H6z"></svg:path>`,
})
export class MemoryNotificationIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
