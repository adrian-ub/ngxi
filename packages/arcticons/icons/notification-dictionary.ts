import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotificationDictionaryIcon],svg[arcticons-notification-dictionary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.622v27.166c7.078-3.906 13.973-3.233 19.5 0c5.997-3.298 12.514-3.603 19.5 0V11.622a20.94 20.94 0 0 0-19.5 0c-5.461-1.673-9.745-4.379-19.5 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.684 19.538a17.9 17.9 0 0 1 11.43-.807m-11.43 10.221a17.9 17.9 0 0 1 11.43-.807m-11.43-4.035a17.9 17.9 0 0 1 11.43-.807"></svg:path>`,
})
export class ArcticonsNotificationDictionaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
