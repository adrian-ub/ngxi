import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadSignIcon],svg[icon-park-road-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 10V22H38L44 16L38 10H6Z"></svg:path><svg:path stroke-linecap="round" d="M23 22V44"></svg:path><svg:path stroke-linecap="round" d="M23 4V10"></svg:path><svg:path stroke-linecap="round" d="M18 44H28"></svg:path></svg:g>`,
})
export class IconParkRoadSignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
