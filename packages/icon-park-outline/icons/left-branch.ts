import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLeftBranchIcon],svg[icon-park-outline-left-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 8c1.5-.012 5.5 0 6.571 5.062C33.655 18.179 38.143 22.848 40 24M26 40c1.5 0 5.5 0 6.571-5.062C33.655 29.821 38.143 25.152 40 24"></svg:path><svg:circle r="4" fill="currentColor" transform="matrix(-1 0 0 1 40 24)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 24H26m-8 0H6M18 8H6m12 32H6"></svg:path></svg:g>`,
})
export class IconParkOutlineLeftBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
