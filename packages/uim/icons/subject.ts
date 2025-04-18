import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimSubjectIcon],svg[uim-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 10H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m8-5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"></svg:path>`,
})
export class UimSubjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
