import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCameraFiveIcon],svg[icon-park-camera-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="21" r="16" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="24" cy="21" r="7" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 43L32 43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 37V43"></svg:path></svg:g>`,
})
export class IconParkCameraFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
