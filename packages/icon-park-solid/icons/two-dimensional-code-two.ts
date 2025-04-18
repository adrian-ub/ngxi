import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoDimensionalCodeTwoIcon],svg[icon-park-solid-two-dimensional-code-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M18 6H6v12h12zm0 24H6v12h12zM42 6H30v12h12z"></svg:path><svg:path stroke-linecap="round" d="M24 6v12m18 6H6m28 6v12m8-12v12M26 30v12"></svg:path></svg:g>`,
})
export class IconParkSolidTwoDimensionalCodeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
