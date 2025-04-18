import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVideocameraOneIcon],svg[icon-park-videocamera-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="31" height="20" x="4" y="21" rx="2"></svg:rect><svg:rect width="9" height="8" x="20" y="27" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:circle cx="27" cy="13" r="5" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13" cy="13" r="5" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 35L44 39V23L35 27"></svg:path></svg:g>`,
})
export class IconParkVideocameraOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
