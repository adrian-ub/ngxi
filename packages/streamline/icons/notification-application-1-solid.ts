import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationApplication1SolidIcon],svg[streamline-notification-application-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-12 0h5.75a3.75 3.75 0 0 0 3.75 3.75V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotificationApplication1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
