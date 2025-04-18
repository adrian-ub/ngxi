import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAppNotificationSolidIcon],svg[iconoir-app-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.25 5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0"></svg:path><svg:path d="M14.527 2.25a5.25 5.25 0 0 0 7.223 7.223V15A6.75 6.75 0 0 1 15 21.75H9A6.75 6.75 0 0 1 2.25 15V9A6.75 6.75 0 0 1 9 2.25z"></svg:path></svg:g>`,
})
export class IconoirAppNotificationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
