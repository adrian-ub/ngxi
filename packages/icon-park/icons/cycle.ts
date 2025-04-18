import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCycleIcon],svg[icon-park-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 35H7V41"></svg:path><svg:path d="M41 41H35V35"></svg:path><svg:path d="M35 13H41V7"></svg:path><svg:path d="M7 7H13V13"></svg:path><svg:path d="M13 7.29395C7.57778 10.8714 4 17.0178 4 23.9999C4 25.0195 4.0763 26.0213 4.2235 26.9999"></svg:path><svg:path d="M26.9999 43.7765C26.0213 43.9237 25.0195 44 23.9999 44C17.0178 44 10.8714 40.4222 7.29395 35"></svg:path><svg:path d="M43.7765 21C43.9237 21.9786 44 22.9804 44 24C44 30.9821 40.4222 37.1285 35 40.706"></svg:path><svg:path d="M21 4.2235C21.9786 4.0763 22.9804 4 24 4C30.9821 4 37.1285 7.57778 40.706 13"></svg:path></svg:g>`,
})
export class IconParkCycleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
