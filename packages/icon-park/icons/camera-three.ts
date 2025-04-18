import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraThreeIcon],svg[icon-park-camera-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="26" x="6" y="14" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M10 14L12.1667 8H19.8333L22 14H10Z"></svg:path><svg:circle cx="29" cy="27" r="7" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path d="M36 10V14"></svg:path></svg:g>`,
})
export class IconParkCameraThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
