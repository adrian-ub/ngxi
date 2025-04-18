import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCameraThreeIcon],svg[icon-park-outline-camera-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="26" x="6" y="14" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linejoin="round" d="m10 14l2.167-6h7.666L22 14z"></svg:path><svg:circle cx="29" cy="27" r="7" stroke-linejoin="round"></svg:circle><svg:path d="M36 10v4"></svg:path></svg:g>`,
})
export class IconParkOutlineCameraThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
