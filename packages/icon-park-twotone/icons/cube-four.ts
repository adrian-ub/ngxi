import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCubeFourIcon],svg[icon-park-twotone-cube-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCubeFour0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="m15.34 9l-8.66 5v20l8.66 5L24 44l8.66-5l8.66-5V14l-8.66-5L24 4z"></svg:path><svg:path d="m24 24l-10.392 6M24 24V11zm0 0l10.392 6zm2.815 11.375L24 37l-2.814-1.625m11.258-19.5l2.814 1.625v3.25m-22.516 0V17.5l2.814-1.625"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCubeFour0)"></svg:path>`,
})
export class IconParkTwotoneCubeFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
