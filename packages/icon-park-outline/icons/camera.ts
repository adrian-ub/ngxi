import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCameraIcon],svg[icon-park-outline-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m15 12l3-6h12l3 6z"></svg:path><svg:rect width="40" height="30" x="4" y="12" rx="3"></svg:rect><svg:path d="M24 35a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z"></svg:path></svg:g>`,
})
export class IconParkOutlineCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
