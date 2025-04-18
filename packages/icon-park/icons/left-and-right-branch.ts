import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftAndRightBranchIcon],svg[icon-park-left-and-right-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 8C14.5 8.00004 17.05 7.99905 18.0143 13.0614C18.989 18.1786 19.3286 22.8477 21 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 40C33.5 40 30.95 40.001 29.9857 34.9386C29.011 29.8214 28.6714 25.1523 27 24.0001"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 40C14.5 40 17.05 40.001 18.0143 34.9386C18.989 29.8214 19.3286 25.1523 21 24.0001"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 8C33.5 8.00004 30.95 7.99905 29.9857 13.0614C29.011 18.1786 28.6714 22.8477 27 24"></svg:path><svg:circle r="4" fill="#000" transform="matrix(-1 0 0 1 21 24)"></svg:circle><svg:circle r="4" fill="#000" transform="matrix(-1 0 0 1 27 24)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 24H13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 24L35 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 24H5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 24H41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 8H5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 8H41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 40H5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 40H41"></svg:path></svg:g>`,
})
export class IconParkLeftAndRightBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
