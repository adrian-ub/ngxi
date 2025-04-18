import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHkustStudentIcon],svg[arcticons-hkust-student-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M19.422 9.077c3.576 5.684-4.432 10.955-.635 17.324c2.162 3.626 6.403 3.69 9.127 1.861c1.201-.806 2.073-2.36 2.346-4.764c-1.486 1.11-2.09 2.938-5.67 2.543l.67-5.366l-2.574 4.459c-5.166-3.335 3.007-9.608-3.264-16.057M4.5 23.769c11.985 1.2 15.15 10.272 19.446 15.154c-4.771-2.884-8.393-10.576-19.446-10.484zm39 0C31.515 24.969 28.297 34.04 24 38.923c4.772-2.884 8.447-10.576 19.5-10.484z"></svg:path><svg:path d="M40.978 30.482c-9.66.967-13.515 4.506-16.978 8.44c3.846-2.324 8.07-4.75 16.978-4.675zm-34.01 0c9.66.967 13.515 4.506 16.978 8.44c-3.846-2.324-8.07-4.75-16.978-4.675z"></svg:path></svg:g>`,
})
export class ArcticonsHkustStudentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
