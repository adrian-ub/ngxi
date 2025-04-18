import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamOneIcon],svg[icon-park-icecream-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 4H31L34 32H14L17 4Z"></svg:path><svg:path d="M21 32V41C21 42.6569 22.3431 44 24 44V44C25.6569 44 27 42.6569 27 41V32"></svg:path><svg:path d="M16 14V14C18.2091 16.2091 21.7909 16.2091 24 14V14V14C26.2091 11.7909 29.7909 11.7909 32 14V14"></svg:path><svg:path d="M15 22V22C17.1706 24.7132 21.1768 25.0409 23.7594 22.7165L24 22.5L24.2406 22.2835C26.8232 19.9591 30.8294 20.2868 33 23V23"></svg:path></svg:g>`,
})
export class IconParkIcecreamOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
