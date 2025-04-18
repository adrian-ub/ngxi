import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGridFourIcon],svg[icon-park-grid-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" rx="2"></svg:rect><svg:path d="M24 5V43"></svg:path><svg:path d="M5 24H43"></svg:path></svg:g>`,
})
export class IconParkGridFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
