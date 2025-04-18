import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFreezingLineColumnIcon],svg[icon-park-freezing-line-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6Z"></svg:path><svg:path stroke-linecap="round" d="M16.1231 6L6 15"></svg:path><svg:path stroke-linecap="round" d="M26.0027 6L6 24"></svg:path><svg:path stroke-linecap="round" d="M35 6L6 33"></svg:path><svg:path stroke-linecap="round" d="M19 30L6 42"></svg:path><svg:path stroke-linecap="round" d="M41 10L29.2432 20.8525"></svg:path><svg:path stroke-linecap="round" d="M19 21V42"></svg:path><svg:path stroke-linecap="round" d="M19 21H42"></svg:path></svg:g>`,
})
export class IconParkFreezingLineColumnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
