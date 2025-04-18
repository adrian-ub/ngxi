import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSubjectIcon],svg[uil-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 3H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSubjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
