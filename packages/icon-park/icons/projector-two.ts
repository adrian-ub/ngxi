import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkProjectorTwoIcon],svg[icon-park-projector-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 12C4 10.8954 4.89543 10 6 10H42C43.1046 10 44 10.8954 44 12V32C44 33.1046 43.1046 34 42 34H6C4.89543 34 4 33.1046 4 32V12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12 19H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12 25H16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 40L14 34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34 40V34"></svg:path><svg:circle cx="31" cy="22" r="5" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkProjectorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
