import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTwoDimensionalCodeOneIcon],svg[icon-park-twotone-two-dimensional-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTwoDimensionalCodeOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M18 6H6v12h12zm0 24H6v12h12zm24 0H30v12h12zm0-24H30v12h12z"></svg:path><svg:path stroke-linecap="round" d="M24 6v18m0 6v12m0-18H6m36 0H30"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTwoDimensionalCodeOne0)"></svg:path>`,
})
export class IconParkTwotoneTwoDimensionalCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
