import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaNotificationBellOutlineIcon],svg[cuida-notification-bell-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="notification-bell-outline"><svg:g fill="currentColor" class="Vector"><svg:path fill-rule="evenodd" d="M10.51 5.22c-.621.168-1.201.431-1.605.795c-1.103.995-1.552 2.343-1.552 4.773c0 1.732-.986 3.372-1.696 4.434c-.154.232-.202.453-.193.586c.004.06.018.088.024.098c.004.007.016.026.064.052c.692.37 1.736.64 2.943.811A26 26 0 0 0 12 17a1 1 0 1 1 0 2c-1.128 0-2.484-.065-3.786-.25c-1.282-.183-2.603-.493-3.605-1.028c-.737-.394-1.093-1.08-1.14-1.779c-.046-.659.177-1.31.525-1.831c.717-1.074 1.359-2.259 1.359-3.324c0-2.661.492-4.707 2.213-6.258c.725-.654 1.636-1.027 2.419-1.24A8 8 0 0 1 12 3a1 1 0 1 1 0 2c-.306 0-.876.052-1.49.22" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13.49 5.22c.621.168 1.201.431 1.605.795c1.103.995 1.552 2.343 1.552 4.773c0 1.732.986 3.372 1.696 4.434c.154.232.202.453.193.586a.2.2 0 0 1-.024.098c-.004.007-.016.026-.064.052c-.692.37-1.736.64-2.943.811A26 26 0 0 1 12 17a1 1 0 1 0 0 2c1.128 0 2.483-.065 3.786-.25c1.282-.183 2.603-.493 3.605-1.028c.737-.394 1.093-1.08 1.14-1.779c.046-.659-.177-1.31-.525-1.831c-.717-1.074-1.359-2.259-1.359-3.324c0-2.661-.492-4.707-2.213-6.258c-.725-.654-1.636-1.027-2.419-1.24A8 8 0 0 0 12 3a1 1 0 1 0 0 2c.306 0 .876.052 1.49.22" clip-rule="evenodd"></svg:path><svg:path d="M14.647 3.68c0 .695-1.396.042-2.5.042s-2.5.653-2.5-.043c0-.695 1-1.679 2.5-1.679s2.5.984 2.5 1.68"></svg:path><svg:path fill-rule="evenodd" d="M10 18a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class CuidaNotificationBellOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
