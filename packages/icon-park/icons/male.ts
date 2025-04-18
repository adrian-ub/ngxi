import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMaleIcon],svg[icon-park-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M41.9517 15.0483V6.04834H32.9517"></svg:path><svg:path fill="#2F88FF" d="M10.4135 38.0007C15.8808 43.4681 24.7451 43.4681 30.2125 38.0007C32.9462 35.2671 34.313 31.6841 34.313 28.1012C34.313 24.5183 32.9462 20.9354 30.2125 18.2017C24.7451 12.7344 15.8808 12.7344 10.4135 18.2017C4.94615 23.6691 4.94615 32.5334 10.4135 38.0007Z"></svg:path><svg:path stroke-linecap="round" d="M30.0002 17.9999L39.9517 8.04838"></svg:path></svg:g>`,
})
export class IconParkMaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
