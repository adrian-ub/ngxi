import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNotificationsIcon],svg[ix-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 149.333V384h101.183l154.817 85.333l-.04-85.333h64.04V149.333zM426.667 192v149.333h-64.04v55.698l-101.143-55.698H192V192zm-64-128v42.667h-256v170.666H64V64z"></svg:path>`,
})
export class IxNotificationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
