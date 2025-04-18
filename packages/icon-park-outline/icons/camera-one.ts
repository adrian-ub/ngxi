import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCameraOneIcon],svg[icon-park-outline-camera-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="19" r="14"></svg:circle><svg:circle cx="24" cy="19" r="6"></svg:circle><svg:path d="m17 31l-6 12h26l-6-12"></svg:path></svg:g>`,
})
export class IconParkOutlineCameraOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
