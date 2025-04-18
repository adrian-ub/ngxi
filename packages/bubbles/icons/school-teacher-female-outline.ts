import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSchoolTeacherFemaleOutlineIcon],svg[bubbles-school-teacher-female-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.75 16.5h7a1.5 1.5 0 0 0 1.5-1.5V2.25a1.5 1.5 0 0 0-1.5-1.5h-10.5m-2.5 22.5l.75-4.5h3L10.25 12C9.5 9.75 8.571 8.25 6.5 8.25s-3 1.5-3.75 3.75L.5 18.75h3l.75 4.5zM3.5 3.75a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path>`,
})
export class BubblesSchoolTeacherFemaleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
