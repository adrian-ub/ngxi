import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRightBranchIcon],svg[icon-park-right-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 8.01189C20.5 8.01205 16.0714 7.93823 15 13.0006C13.917 18.1178 9.85714 22.8479 8 24.0001"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 40.0002C20.5 40.0005 16.0714 40.0631 15 35.0007C13.917 29.8835 9.85714 25.1524 8 24.0002"></svg:path><svg:circle cx="8" cy="24" r="4" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 24.0001L22 24.0001"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 24.0006H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 8.00098H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 40.001H42"></svg:path></svg:g>`,
})
export class IconParkRightBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
