import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHeadsetOneIcon],svg[icon-park-twotone-headset-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHeadsetOne0"><svg:g fill="none"><svg:path fill="#555" d="M36 32a8 8 0 1 0 0-16"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M36 32a8 8 0 1 0 0-16"></svg:path><svg:path fill="#555" d="M12 16a8 8 0 1 0 0 16"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M12 16a8 8 0 1 0 0 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 32V16c0-6.627 5.373-12 12-12s12 5.373 12 12v16c0 6.627-5.373 12-12 12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHeadsetOne0)"></svg:path>`,
})
export class IconParkTwotoneHeadsetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
