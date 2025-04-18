import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRemoteControlOneIcon],svg[icon-park-twotone-remote-control-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRemoteControlOne0"><svg:g fill="none"><svg:path stroke="#fff" stroke-width="4" d="M11 5.446C11 4.647 11.647 4 12.446 4h23.108C36.353 4 37 4.647 37 5.446V31c0 7.18-5.82 13-13 13s-13-5.82-13-13z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 16h3m8 0h3"></svg:path><svg:circle cx="17" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="31" r="7" fill="#555" stroke="#fff" stroke-width="4"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRemoteControlOne0)"></svg:path>`,
})
export class IconParkTwotoneRemoteControlOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
