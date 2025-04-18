import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCameraFiveIcon],svg[icon-park-outline-camera-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="21" r="16"></svg:circle><svg:circle cx="24" cy="21" r="7"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 43h16m-8-6v6"></svg:path></svg:g>`,
})
export class IconParkOutlineCameraFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
