import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLipstickIcon],svg[icon-park-twotone-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLipstick0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29 24h12v20H29zM7 24h14v20H7z"></svg:path><svg:path fill="#555" d="M10 11.455V24h8V4c-6.5 0-8 5.636-8 7.454"></svg:path><svg:path d="M7 32h14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLipstick0)"></svg:path>`,
})
export class IconParkTwotoneLipstickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
