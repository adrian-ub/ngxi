import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRdclientIcon],svg[arcticons-rdclient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.65 20.05V6.85H4.55v22h14.9V33c0 1 .1 2-2.4 2.1h-2.9a2.15 2.15 0 0 0-2.1 2.1h12"></svg:path><svg:circle cx="32.45" cy="30.15" r="11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37 24l-3.9 3.9l3.9 3.9m-8.95-3.25l3.9 3.9l-3.9 3.9m-8.6-7.5h2"></svg:path>`,
})
export class ArcticonsRdclientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
