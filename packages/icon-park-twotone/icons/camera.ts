import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCameraIcon],svg[icon-park-twotone-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCamera0"><svg:g fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="m15 12l3-6h12l3 6z"></svg:path><svg:rect width="40" height="30" x="4" y="12" rx="3"></svg:rect><svg:path d="M24 35a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCamera0)"></svg:path>`,
})
export class IconParkTwotoneCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
