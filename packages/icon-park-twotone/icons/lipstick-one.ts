import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLipstickOneIcon],svg[icon-park-twotone-lipstick-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLipstickOne0"><svg:g fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m39.435 5.323l1.414 1.414a4 4 0 0 1 0 5.657l-7.071 7.07l-4.243-4.242zm-11.314 8.485l7.071 7.071l-11.314 11.314l-7.07-7.071z"></svg:path><svg:path d="m15.394 23.707l9.9 9.9l-9.9 9.899l-9.9-9.9z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLipstickOne0)"></svg:path>`,
})
export class IconParkTwotoneLipstickOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
