import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLowerBranchIcon],svg[icon-park-lower-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 23C6 21.5 7.99903 17.5 13.0614 16.4286C18.1786 15.3455 22.8477 10.8571 24 9"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41.9999 23C42.0118 21.5 40.0009 17.5 34.9385 16.4286C29.8213 15.3455 25.1522 10.8571 24 9"></svg:path><svg:circle r="4" fill="#000" transform="matrix(0 1 1 0 24 9)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 9L24 23"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 33H11"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 41H11"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 33H43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 41H43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 33H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 41H27"></svg:path></svg:g>`,
})
export class IconParkLowerBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
