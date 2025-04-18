import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftBranchIcon],svg[icon-park-left-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 8C27.5 7.98823 31.5 7.99912 32.5714 13.0615C33.6545 18.1787 38.1429 22.8478 40 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 40C27.5 40 31.5 40.0009 32.5714 34.9385C33.6545 29.8213 38.1429 25.1522 40 24"></svg:path><svg:circle r="4" fill="#000" transform="matrix(-1 0 0 1 40 24)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 24L26 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 24H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 8H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 40H6"></svg:path></svg:g>`,
})
export class IconParkLeftBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
