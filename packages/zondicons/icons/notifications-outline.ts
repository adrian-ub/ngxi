import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsNotificationsOutlineIcon],svg[zondicons-notifications-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8v7h8V8a4 4 0 1 0-8 0m2.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8a6 6 0 0 1 4.03-5.67M12 18a2 2 0 1 1-4 0z"></svg:path>`,
})
export class ZondiconsNotificationsOutlineIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
