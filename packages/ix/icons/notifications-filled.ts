import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNotificationsFilledIcon],svg[ix-notifications-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 149.333V384h-64.04l.04 85.333L250.516 384H149.333V149.333zM362.667 64v42.667h-256v170.666H64V64z"></svg:path>`,
})
export class IxNotificationsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
