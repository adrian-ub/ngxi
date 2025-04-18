import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamFiveIcon],svg[icon-park-icecream-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M14 14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V31.7308C34 31.8795 33.8795 32 33.7308 32H14.2692C14.1205 32 14 31.8795 14 31.7308V14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 16V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 16V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 32V41C21 42.6569 22.3431 44 24 44C25.6569 44 27 42.6569 27 41V32"></svg:path></svg:g>`,
})
export class IconParkIcecreamFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
