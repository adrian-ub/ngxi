import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTwoDimensionalCodeOneIcon],svg[icon-park-outline-two-dimensional-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M18 6H6v12h12zm0 24H6v12h12zm24 0H30v12h12zm0-24H30v12h12z"></svg:path><svg:path stroke-linecap="round" d="M24 6v18m0 6v12m0-18H6m36 0H30"></svg:path></svg:g>`,
})
export class IconParkOutlineTwoDimensionalCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
