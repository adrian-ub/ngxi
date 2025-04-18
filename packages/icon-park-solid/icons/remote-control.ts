import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRemoteControlIcon],svg[icon-park-solid-remote-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="26" height="40" x="11" y="4" rx="2"></svg:rect><svg:circle cx="24" cy="34" r="4"></svg:circle><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 10h12v8H18z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 24h2"></svg:path></svg:g>`,
})
export class IconParkSolidRemoteControlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
