import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMapRoadIcon],svg[icon-park-map-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 12L37 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 12L12 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 12V16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 22V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 32V36"></svg:path></svg:g>`,
})
export class IconParkMapRoadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
