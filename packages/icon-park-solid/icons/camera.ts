import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCameraIcon],svg[icon-park-solid-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCamera0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m15 12l3-6h12l3 6z"></svg:path><svg:rect width="40" height="30" x="4" y="12" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path fill="#000" stroke="#000" d="M24 35a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCamera0)"></svg:path>`,
})
export class IconParkSolidCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
