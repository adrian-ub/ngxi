import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGolfCourseIcon],svg[icon-park-golf-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="24" cy="34" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="20" ry="10"></svg:ellipse><svg:circle cx="32" cy="34" r="2" fill="#2F88FF" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" d="M24 9L13 4V14L24 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 34V14M13 14V4L24 9L13 14Z"></svg:path></svg:g>`,
})
export class IconParkGolfCourseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
