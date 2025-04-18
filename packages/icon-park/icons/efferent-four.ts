import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEfferentFourIcon],svg[icon-park-efferent-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 5L10 5C8.89543 5 8 5.89543 8 7L8 41C8 42.1046 8.89543 43 10 43L38 43C39.1046 43 40 42.1046 40 41L40 24.75"></svg:path><svg:path d="M28 5H40V17"></svg:path><svg:path d="M21.0001 23.9998L39 6"></svg:path></svg:g>`,
})
export class IconParkEfferentFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
