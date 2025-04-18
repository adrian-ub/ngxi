import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidListTwoIcon],svg[icon-park-solid-list-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="svgIDa"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" d="M9 42a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke-linecap="round" d="M21 24h22M21 38h22M21 10h22"></svg:path></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)"></svg:path>`,
})
export class IconParkSolidListTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
