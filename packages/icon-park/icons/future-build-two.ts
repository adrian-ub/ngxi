import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFutureBuildTwoIcon],svg[icon-park-future-build-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:ellipse cx="24.5" cy="7" rx="13.5" ry="3"></svg:ellipse><svg:path d="M16 9C16 9 20.1593 17.8828 21 24C22.0687 31.7763 20 44 20 44"></svg:path><svg:path d="M32.2266 9C32.2266 9 28.0673 17.8828 27.2266 24C26.1578 31.7763 28.0006 44 28.0006 44"></svg:path></svg:g>`,
})
export class IconParkFutureBuildTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
