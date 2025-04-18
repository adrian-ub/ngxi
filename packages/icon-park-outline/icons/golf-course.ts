import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGolfCourseIcon],svg[icon-park-outline-golf-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="24" cy="34" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="20" ry="10"></svg:ellipse><svg:circle cx="32" cy="34" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path d="M24 9L13 4v10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 34V14m0 0V4l11 5z"></svg:path></svg:g>`,
})
export class IconParkOutlineGolfCourseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
