import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCubeFourIcon],svg[icon-park-outline-cube-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m15.34 9l-8.66 5v20l8.66 5L24 44l8.66-5l8.66-5V14l-8.66-5L24 4zM24 24l-10.392 6M24 24V11zm0 0l10.392 6z"></svg:path><svg:path d="M26.815 35.375L24 37l-2.814-1.625m11.258-19.5l2.814 1.625v3.25m-22.516 0V17.5l2.814-1.625"></svg:path></svg:g>`,
})
export class IconParkOutlineCubeFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
