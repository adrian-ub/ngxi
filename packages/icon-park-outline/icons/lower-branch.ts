import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLowerBranchIcon],svg[icon-park-outline-lower-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 23c0-1.5 1.999-5.5 7.061-6.571C18.18 15.346 22.848 10.857 24 9m18 14c.012-1.5-2-5.5-7.062-6.571C29.821 15.346 25.152 10.857 24 9"></svg:path><svg:circle r="4" fill="currentColor" transform="matrix(0 1 1 0 24 9)"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 9v14M5 33h6m-6 8h6m26-8h6m-6 8h6m-22-8h6m-6 8h6"></svg:path></svg:g>`,
})
export class IconParkOutlineLowerBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
