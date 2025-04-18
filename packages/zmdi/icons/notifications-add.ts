import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNotificationsAddIcon],svg[zmdi-notifications-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 408h84q0 18-12 30.5T192 451t-30-12.5t-12-30.5m189-89l45 45v23H0v-23l45-45V195q0-52 32-91.5T158 52V37q0-14 10-24t24-10t24 10t10 24v15q49 12 81 51.5t32 91.5zm-62-81v-43h-64v-64h-42v64h-64v43h64v64h42v-64z"></svg:path>`,
})
export class ZmdiNotificationsAddIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
