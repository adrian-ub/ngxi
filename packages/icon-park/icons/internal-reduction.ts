import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInternalReductionIcon],svg[icon-park-internal-reduction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M42 8C42 6.89543 41.1046 6 40 6H28V20H42V8Z" clip-rule="evenodd"></svg:path><svg:path d="M23 25L13 35M13 35V28M13 35H20"></svg:path></svg:g>`,
})
export class IconParkInternalReductionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
