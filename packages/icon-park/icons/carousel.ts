import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCarouselIcon],svg[icon-park-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 11C4 9.89543 4.89543 9 6 9H42C43.1046 9 44 9.89543 44 11V35C44 36.1046 43.1046 37 42 37H6C4.89543 37 4 36.1046 4 35V11Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M28 17H20V29H28V17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M44 17H36V29H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 17H12V29H4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 13V33"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 13V33"></svg:path></svg:g>`,
})
export class IconParkCarouselIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
