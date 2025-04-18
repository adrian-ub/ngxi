import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFrenchFriesIcon],svg[icon-park-french-fries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 22V12C21 10.8954 20.1046 10 19 10H16C14.8954 10 14 10.8954 14 12V21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 21V14C35 12.8954 34.1046 12 33 12H30C28.8954 12 28 12.8954 28 14V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 22V6C28 4.89543 27.1046 4 26 4H23C21.8954 4 21 4.89543 21 6V22"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7 18C7 18 14 23 24 23C34 23 41 18 41 18L36.1819 44H11.8182L7 18Z"></svg:path><svg:ellipse cx="24" cy="33" fill="#43CCF8" stroke="#fff" rx="6" ry="3"></svg:ellipse></svg:g>`,
})
export class IconParkFrenchFriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
