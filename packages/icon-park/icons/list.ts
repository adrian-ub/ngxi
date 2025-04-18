import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListIcon],svg[icon-park-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 10L8 13L14 7"></svg:path><svg:path d="M5 24L8 27L14 21"></svg:path><svg:path d="M5 38L8 41L14 35"></svg:path><svg:path d="M21 24H43"></svg:path><svg:path d="M21 38H43"></svg:path><svg:path d="M21 10H43"></svg:path></svg:g>`,
})
export class IconParkListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
