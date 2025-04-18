import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationApplication2SolidIcon],svg[streamline-notification-application-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.648.024c.483 0 .875.392.875.875v2.5a.875.875 0 0 1-1.75 0v-2.5c0-.483.392-.875.875-.875m-1 5.875a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-1-2.5V2.5H2a2 2 0 0 0-2 2V12a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2V7.784a2.068 2.068 0 0 1-2.456-3.19a2 2 0 0 1-.396-1.195" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotificationApplication2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
