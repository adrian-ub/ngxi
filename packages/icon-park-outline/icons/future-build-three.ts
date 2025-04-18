import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFutureBuildThreeIcon],svg[icon-park-outline-future-build-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="m20 8l4-4l4 4v36h-8z"></svg:path><svg:path stroke-linecap="round" d="m12 20l8-8v32h-8zM4 35l8-7v16H4zm24-23l8 8v24h-8zm8 16l8 6.5V44h-8z"></svg:path></svg:g>`,
})
export class IconParkOutlineFutureBuildThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
