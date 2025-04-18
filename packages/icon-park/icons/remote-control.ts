import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRemoteControlIcon],svg[icon-park-remote-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="26" height="40" x="11" y="4" rx="2"></svg:rect><svg:circle cx="24" cy="34" r="4"></svg:circle><svg:rect width="12" height="8" x="18" y="10" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 24H25"></svg:path></svg:g>`,
})
export class IconParkRemoteControlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
