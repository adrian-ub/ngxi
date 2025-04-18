import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSchoolTeacherMaleOutlineIcon],svg[bubbles-school-teacher-male-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 3.75a3 3 0 1 0 6 0a3 3 0 0 0-6 0m5.25 19.5l.75-7.5h1.5v-3a4.5 4.5 0 1 0-9 0v3h1.5l.75 7.5zm5.25-6.75h9a1.5 1.5 0 0 0 1.5-1.5V2.25a1.5 1.5 0 0 0-1.5-1.5h-10.5"></svg:path>`,
})
export class BubblesSchoolTeacherMaleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
